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

const TopAppsByHostForm = ({ onDeleteApp, onShowToastMessage, ...props }) => {
  const [host, setHost] = useState();
  const [error, setError] = useState();

  const handleOnSubmit = event => {
    event.preventDefault();

    if (!host) {
      setError("Please add the host");
    } else {
      props.history.push(`/TopAppsByHost/${host}`);
      setHost("");
    }
  };

  const handleOnChange = event => {
    setHost(event.target.value);
    setError("");
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <Title>Top Apps By Host</Title>
      <Label>Host:</Label>
      <Input name="name" type="text" value={host} onChange={handleOnChange} />
      {error && <Helper>{error}</Helper>}
      <ButtonWrapper>
        <Button type="submit">Show List</Button>
      </ButtonWrapper>
    </Form>
  );
};

TopAppsByHostForm.propTypes = {
  onDeleteApp: func.isRequired,
  onShowToastMessage: func.isRequired
};

export { TopAppsByHostForm };
