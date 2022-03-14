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
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  Snackbar,
} from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as React from "react";
import * as yup from "yup";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import TinyMceEditor from "./TinyMceEditor";
import axios from "axios";

import tagList from "./staticData";

const YupValidation = yup.object({
  eventname: yup
    .string()
    .min(3, "Too Short !")
    .max(30, "Too Long !")
    .required("Required !"),

  summary: yup
    .string()
    .min(3, "Too Short !")
    .max(30, "Too Long !")
    .required("Required !"),

  eventstartdate: yup.date().required("Required !"),
  eventenddate: yup
    .date()
    .min(yup.ref("eventstartdate"), ({ min }) => `Date needs to be before !!`),
  registrationenddate: yup.date().required("Required !"),
});

const BasicFormValidation = () => {
  const [eventstartdate, seteventstartdate] = React.useState(null);
  const [eventenddate, seteventenddate] = React.useState(null);
  const [registrationenddate, setregistrationenddate] = React.useState(null);

  // const [open, setOpen] = React.useState(false);

  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;
  const initialValue = {
    eventname: "",
    summary: "",
    venue: "",
    tags: "",
    goal: "",
    registrationenddate: "",
    eventstartdate: "",
    eventenddate: "",
  };

  // const handleSubmit = (values, props) => {
  //   console.log(values);
  // };

  const handleClickOpen = () => {
    this.setOpen(true);
  };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  // add event
  const addEvent = (eventObj) => {
    axios
      .post("/api/events", eventObj)
      .then((eventres) => {
        console.log(eventres);
        handleClickOpen();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div>
        <div>
          <Button
            onClick={handleClick({
              vertical: "top",
              horizontal: "center",
            })}
          >
            Event has been created
          </Button>
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onClose={handleClose}
            message="I love snacks"
            key={vertical + horizontal}
          />
          {/* <Dialog
            open={open}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>{"Congratulations!!!"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                Event has been created.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleClose}>Ok</Button>
            </DialogActions>
          </Dialog> */}
        </div>
      </div>
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
                  onSubmit={(values) => {
                    // console.log("clicked", values);
                    const eventObj = {
                      name: values.eventname,
                      summary: values.summary,
                      tags: values.tags,
                      description: values.summary,
                      venue: values.venue,
                      goal: values.goal,
                      registrationenddate: values.registrationenddate,
                      eventstartdate: values.eventstartdate,
                      eventenddate: values.eventenddate,
                    };

                    addEvent(eventObj);
                  }}
                  // onSubmit={handleSubmit}
                >
                  {(props) => {
                    const {
                      classes,
                      values,
                      touched,
                      errors,
                      isSubmitting,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      handleReset,
                      setFieldValue,
                    } = props;
                    return (
                      <Form>
                        <Grid container spacing={2} mt={1}>
                          <Grid item sm={6}>
                            <Field
                              as={TextField}
                              label="Event Name"
                              name="eventname"
                              value={values.eventname}
                              fullWidth
                              variant="outlined"
                              margin="dense"
                              helperText={
                                touched.eventname ? errors.eventname : ""
                              }
                              error={
                                touched.eventname && Boolean(errors.eventname)
                              }
                            />
                          </Grid>
                          <Grid item sm={6}>
                            <Field
                              as={TextField}
                              label="Summary"
                              name="summary"
                              value={values.summary}
                              fullWidth
                              variant="outlined"
                              margin="dense"
                              helperText={touched.summary ? errors.summary : ""}
                              error={touched.summary && Boolean(errors.summary)}
                            />
                          </Grid>
                        </Grid>
                        <Grid container spacing={2} mt={0}>
                          <Grid item sm={6}>
                            <Field
                              as={TextField}
                              label="Venue"
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
                              <Field
                                as={Select}
                                label="Tags"
                                name="Tags"
                                value={values.tags}
                                onChange={handleChange("tags")}
                                helperText={touched.tags ? errors.tags : ""}
                                error={touched.tags && Boolean(errors.tags)}
                                margin="dense"
                                variant="outlined"
                                fullWidth
                              >
                                {tagList.map((option) => (
                                  <MenuItem
                                    key={option.value}
                                    value={option.value}
                                  >
                                    {option.label}
                                  </MenuItem>
                                ))}
                              </Field>
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
                        <Grid container spacing={3} mt={1}>
                          <Grid item sm={4}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                              <DatePicker
                                label="Event Start Date"
                                name="eventstartdate"
                                value={eventstartdate ?? ""}
                                defaultValue=""
                                format="MM/dd/yyyy"
                                onChange={(newValue) => {
                                  seteventstartdate(newValue);
                                  setFieldValue(
                                    "eventstartdate",
                                    new Date(newValue)
                                  );
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
                                name="eventenddate"
                                value={eventenddate ?? ""}
                                defaultValue=""
                                format="MM/dd/yyyy"
                                onChange={(newValue) => {
                                  seteventenddate(newValue);
                                  setFieldValue(
                                    "eventenddate",
                                    new Date(newValue)
                                  );
                                }}
                                renderInput={(params) => (
                                  <TextField {...params} />
                                )}
                                helperText={
                                  touched.eventenddate
                                    ? errors.eventenddate
                                    : ""
                                }
                                error={
                                  touched.eventenddate &&
                                  Boolean(errors.eventenddate)
                                }
                              />
                            </LocalizationProvider>
                          </Grid>

                          <Grid item sm={4}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                              <DatePicker
                                label="Registration End Date"
                                name="registrationenddate"
                                format="MM/dd/yyyy"
                                value={registrationenddate ?? ""}
                                onChange={(newValue) => {
                                  setregistrationenddate(newValue);
                                  setFieldValue(
                                    "registrationenddate",
                                    new Date(newValue)
                                  );
                                }}
                                renderInput={(params) => (
                                  <TextField {...params} />
                                )}
                              />
                            </LocalizationProvider>
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
                        <Grid container spacing={2} mt={1}>
                          <Grid item sm={12}>
                            <Button
                              variant="contained"
                              type="submit"
                              color="success"
                              fullWidth
                              onClick={handleSubmit}
                            >
                              Submit
                            </Button>
                          </Grid>
                        </Grid>
                      </Form>
                    );
                  }}
                </Formik>
              </Box>
            </Paper>
          </Grid>

          {/* <Button
          variant="contained"
          type="submit"
          color="primary"
          fullWidth
          onClick={handleSubmit}
        >
          Submit
        </Button> */}
        </Grid>
      </Container>
    </div>
  );
};

export default BasicFormValidation;
