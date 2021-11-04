import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  Divider,
  Container,
  FormGroup,
  FormControlLabel,
  Switch,
} from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as React from "react";
import * as yup from "yup";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import TinyMceEditor from "./TinyMceEditor";

import tagValue from "./staticData";
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

  const [value, setValue] = React.useState(null);

  const [tags, setTags] = React.useState("");

  const handleChange = (event) => {
    setTags(event.target.value);
  };

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
    <Container maxWidth="xlg">
      <Grid container maxWidth="xlg">
        <Grid item sm={12}>
          <Paper elevation={1}>
            <Box m={3} p={3}>
              <Typography variant="h5">Basic Details</Typography>
              <Divider />
              <Formik
                initialValues={initialValue}
                validationSchema={YupValidation}
                onSubmit={handleSubmit}
              >
                {(props) => {
                  const { name } = props.values;
                  return (
                    <Form>
                      <Grid container spacing={2} mt={1}>
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
                            label="Summary"
                            type="Summary"
                            name="Summary"
                            fullWidth
                            variant="outlined"
                            margin="dense"
                            helperText={<ErrorMessage name="Summary" />}
                            error={
                              props.errors.Summary && props.touched.Summary
                            }
                          />
                        </Grid>
                      </Grid>
                      <Grid container spacing={2} mt={0}>
                        <Grid item sm={6}>
                          <Field
                            as={TextField}
                            label="Venue"
                            type="venue"
                            name="venue"
                            fullWidth
                            variant="outlined"
                            margin="dense"
                            helperText={<ErrorMessage name="venue" />}
                            error={props.errors.venue && props.touched.venue}
                          />
                        </Grid>
                        <Grid item sm={6}>
                          <FormControl sx={{ m: 0.8 }} fullWidth>
                            <InputLabel>Tags</InputLabel>
                            <Select
                              value={tags}
                              label="Tags"
                              variant="outlined"
                              margin="dense"
                              onChange={handleChange}
                            >
                              {tagValue.map((tagValue) => (
                                <MenuItem key={tagValue} value={tagValue}>
                                  {tagValue}
                                </MenuItem>
                              ))}
                            </Select>
                            {/* <FormHelperText>With label + helper text</FormHelperText> */}
                          </FormControl>
                        </Grid>
                      </Grid>
                      <Grid container spacing={2} mt={0}>
                        <Grid item sm={12}>
                          <Field
                            as={TextField}
                            label="Goal"
                            name="goal"
                            fullWidth
                            variant="outlined"
                            margin="dense"
                            helperText={<ErrorMessage name="goal" />}
                            error={props.errors.goal && props.touched.goal}
                          />
                        </Grid>
                      </Grid>

                      <Grid container spacing={2} mt={1}>
                        <Grid item sm={12}>
                          <InputLabel id="demo-simple-select-helper-label">
                            Description
                            <Divider />
                            <TinyMceEditor />
                          </InputLabel>
                        </Grid>
                      </Grid>

                      <Button
                        variant="contained"
                        type="submit"
                        color="primary"
                        fullWidth
                        onClick={handleSubmit}
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

        <Grid item sm={12}>
          <Paper elevation={1}>
            <Box m={3} p={3}>
              <Grid container spacing={1}>
                <Grid item sm={4}>
                  <Typography variant="h5">Event Dates</Typography>
                </Grid>
                <Grid item sm={4}>
                  <FormControlLabel
                    value="ongoingevent"
                    control={<Switch color="secondary" />}
                    label="Ongoing Event"
                    labelPlacement="end"
                  />
                </Grid>
              </Grid>
              <Divider />
              <Formik
                initialValues={initialValue}
                validationSchema={YupValidation}
                onSubmit={handleSubmit}
              >
                {(props) => {
                  const { name } = props.values;
                  return (
                    <Form>
                      <Grid container spacing={3} mt={1}>
                        <Grid item sm={4}>
                          <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                              label="Event Start Date"
                              value={value}
                              onChange={(newValue) => {
                                setValue(newValue);
                              }}
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                            />
                          </LocalizationProvider>
                        </Grid>
                        <Grid item sm={4}>
                          <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                              label="Event End Date"
                              value={value}
                              onChange={(newValue) => {
                                console.log(newValue + 5);
                                setValue(newValue + 5);
                              }}
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                            />
                          </LocalizationProvider>
                        </Grid>

                        <Grid item sm={4}>
                          <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                              label="Registration End Date"
                              value={value}
                              onChange={(newValue) => {
                                setValue(newValue);
                              }}
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                            />
                          </LocalizationProvider>
                        </Grid>
                      </Grid>
                    </Form>
                  );
                }}
              </Formik>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BasicFormValidation;
