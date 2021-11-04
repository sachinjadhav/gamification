import React from "react";
import { Container, Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./about.css";

function App() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required field"),
      email: Yup.string()
        .email("El email es obligatorio")
        .required("Email is required field"),
      password: Yup.string()
        .required()
        .oneOf([Yup.ref("repeatPassword")], "Password is required field"),
      repeatPassword: Yup.string()
        .required()
        .oneOf([Yup.ref("password")], "Password is required field"),
    }),
    onSubmit: (formData) => {
      console.log(formData);
    },
  });

  return (
    <Container
      style={{
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1>Registration</h1>
      <Form style={{ width: "30%" }} onSubmit={formik.handleSubmit}>
        <Form.Input
          type="text"
          placeholder="Enter name"
          name="name"
          label="Name"
          onChange={formik.handleChange}
          error={formik.errors.name}
          value={formik.values.name}
        />
        <Form.Input
          type="text"
          placeholder="Enter email address"
          name="email"
          label="Email"
          onChange={formik.handleChange}
          error={formik.errors.email}
          value={formik.values.email}
        />
        <Form.Input
          type="password"
          placeholder="Enter Password with more than 8 chars"
          name="password"
          onChange={formik.handleChange}
          error={formik.errors.password}
          value={formik.values.password}
        />
        <Form.Input
          type="password"
          placeholder="Enter the password again"
          name="repeatPassword"
          onChange={formik.handleChange}
          error={formik.errors.repeatPassword}
          value={formik.values.repeatPassword}
        />
        <Button type="submit">Register</Button>
        <Button type="button" onClick={formik.handleReset}>
          Reset
        </Button>
      </Form>
    </Container>
  );
}

export default App;
