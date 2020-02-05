import React, { useState } from "react";
import {
  Helper,
  Input,
  Label,
  Form,
  Button,
  ButtonWrapper,
  Title
} from "./styled";
import { func } from "prop-types";

const AddAppForm = ({ onAddApp, onShowToastMessage }) => {
  const [app, setApp] = useState({
    name: "",
    contributors: [],
    version: "",
    host: [],
    apdex: ""
  });
  const [errors, setErrors] = useState({
    name: "",
    contributors: "",
    version: "",
    host: "",
    apdex: ""
  });

  const handleOnChange = event => {
    const value =
      event.target.name === "contributors" || event.target.name === "host"
        ? event.target.value.split(",")
        : event.target.value;
    setApp({ ...app, [event.target.name]: value });
    setErrors({ ...errors, [event.target.name]: "" });
  };

  const handleOnSubmit = event => {
    event.preventDefault();

    const errors = {};
    if (!app.name) errors.name = "Please add the name";

    if (app.contributors.length === 0) {
      errors.contributors = "Please add the contributors";
    }
    if (!app.version) {
      errors.version = "Please add the version";
    }
    if (app.host.length === 0) {
      errors.host = "Please add the host";
    }
    if (!app.apdex) {
      errors.apdex = "Please add apdex";
    }

    if (Object.keys(errors).length === 0) {
      onAddApp({ app });
      onShowToastMessage({ messageKey: "App successfully added to host" });
      setApp({
        name: "",
        contributors: [],
        version: "",
        host: [],
        apdex: ""
      });
    } else {
      setErrors(errors);
    }
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <Title>Add App</Title>
      <Label>App Name:</Label>
      <Input
        name="name"
        type="text"
        value={app.name}
        onChange={handleOnChange}
      />
      {errors.name && <Helper>{errors.name}</Helper>}
      <Label>Contributors:</Label>
      <Input
        name="contributors"
        type="text"
        value={app.contributors.toString() || ""}
        onChange={handleOnChange}
      />
      {errors.contributors && <Helper>{errors.contributors}</Helper>}
      <Label>Apdex:</Label>
      <Input
        name="apdex"
        type="text"
        value={app.apdex}
        onChange={handleOnChange}
      />
      {errors.apdex && <Helper>{errors.apdex}</Helper>}
      <Label>Version:</Label>
      <Input
        name="version"
        type="text"
        value={app.version}
        onChange={handleOnChange}
      />
      {errors.version && <Helper>{errors.version}</Helper>}
      <Label>Host:</Label>
      <Input
        name="host"
        type="text"
        value={app.host.toString() || ""}
        onChange={handleOnChange}
      />
      {errors.host && <Helper>{errors.host}</Helper>}
      <ButtonWrapper>
        <Button type="submit">Add</Button>
      </ButtonWrapper>
    </Form>
  );
};

AddAppForm.propTypes = {
  onAddApp: func.isRequired,
  onShowToastMessage: func.isRequired
};

export { AddAppForm };
