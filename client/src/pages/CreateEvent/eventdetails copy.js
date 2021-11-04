import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useState } from "react";
import * as yup from "yup";

const BasicFormValidation = () => {
  const initialValue = {
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    image: "",
  };
  const SUPPORTED_FORMATS = ["image/jpeg", "image/jpg", "image/png"];

  const phoneNumberRegEx = /^[0-1]{2}[0-9]{9}/;
  const PasswordRegEx =
    /^.*((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;

  const YupValidation = yup.object().shape({
    name: yup
      .string()
      .min(3, "Too Short !")
      .max(30, "Too Long !")
      .required("Required !"),

    email: yup
      .string()
      .email("Enter a Vaid Email")
      .required("Email is Required"),

    password: yup
      .string()
      .required("Enter Your Password")
      .matches(PasswordRegEx, "Uppercase Lowercase Special char Required")
      .min(8, "Password Should be minimum 8 character")
      .max(50, "Too long"),

    phoneNumber: yup
      .string()
      .matches(phoneNumberRegEx, "Invalid Phone Number")
      .max(11, "Invalid Phone Number")
      .required("Required !"),

    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Password does not matched")
      .required("Confirm Password is Required"),

    image: yup
      .mixed()
      .required("File is Required")
      .test(
        "fileSize",
        "File more than 0.5 MB not Allowed",
        (value) => value && value.size <= 524288
      )
      .test(
        "fileFormat",
        "Unsupported Format",
        (value) => value && SUPPORTED_FORMATS.includes(value.type)
      ),

    // website: yup.string().url().required("Website is Required"),

    // select: yup.string().required("Select a Option"),
  });

  const handleSubmit = (values, props) => {
    console.log(values);
    alert(JSON.stringify(values));

    props.resetForm();
  };

  return (
    <Grid container>
      {/* <Grid item sm={3} xs={false}></Grid> */}
      <Grid item sm={12}>
        <Paper>
          <Box m={3} p={3}>
            <Typography variant="h5">Basic Details</Typography>
            <Formik
              initialValues={initialValue}
              validationSchema={YupValidation}
              onSubmit={handleSubmit}
            >
              {(props) => {
                const { name } = props.values;
                return (
                  <Form>
                    <Grid container spacing={2}>
                      <Grid item sm={6}>
                        <TextField
                          label="Event Name"
                          name="name"
                          fullWidth
                          variant="outlined"
                          margin="dense"
                          value={name}
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          helperText={<ErrorMessage name="name" />}
                          error={props.errors.name && props.touched.name}
                          required
                        />
                      </Grid>
                      <Grid item sm={6}>
                        <Field
                          as={TextField}
                          label="Email"
                          type="Email"
                          name="email"
                          fullWidth
                          variant="outlined"
                          margin="dense"
                          helperText={<ErrorMessage name="email" />}
                          error={props.errors.email && props.touched.email}
                        />
                      </Grid>
                    </Grid>
                    <Field
                      as={TextField}
                      label="Phone Number"
                      name="phoneNumber"
                      fullWidth
                      variant="outlined"
                      margin="dense"
                      helperText={<ErrorMessage name="phoneNumber" />}
                      error={
                        props.errors.phoneNumber && props.touched.phoneNumber
                      }
                    />

                    <Field
                      as={TextField}
                      label="Password"
                      name="password"
                      type="password"
                      fullWidth
                      variant="outlined"
                      margin="dense"
                      helperText={<ErrorMessage name="password" />}
                      error={props.errors.password && props.touched.password}
                    />

                    <Field
                      as={TextField}
                      label="Confirm Password"
                      name="confirmPassword"
                      type="password"
                      fullWidth
                      variant="outlined"
                      margin="dense"
                      helperText={<ErrorMessage name="confirmPassword" />}
                      error={
                        props.errors.confirmPassword &&
                        props.touched.confirmPassword
                      }
                    />

                    {/* <TextField
                      name="image"
                      type="file"
                      fullWidth
                      variant="outlined"
                      margin="dense"
                      onChange={(event) =>
                        props.setFieldValue("image", event.target.files[0])
                      }
                      onBlur={props.handleBlur}
                      helperText={<ErrorMessage name="image" />}
                      error={props.errors.image && props.touched.image}
                      required
                    /> */}

                    <Button
                      variant="contained"
                      type="submit"
                      color="primary"
                      fullWidth
                    >
                      Submit
                    </Button>
                  </Form>
                );
              }}
            </Formik>
          </Box>
        </Paper>
      </Grid>
      <Grid item sm={3} xs={false}></Grid>
    </Grid>
  );
};

export default BasicFormValidation;
