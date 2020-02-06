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
import { func, shape } from "prop-types";

const TopAppsByHostForm = ({ onDeleteApp, onShowToastMessage, history }) => {
  const [host, setHost] = useState("");
  const [error, setError] = useState();

  const handleOnSubmit = event => {
    event.preventDefault();
    console.log(history);
    if (!host) {
      setError("Please add the host");
    } else {
      history.push(`/top-apps-by-host/${host}`);
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
  onShowToastMessage: func.isRequired,
  history: shape({ push: func.isRequired }).isRequired
};

export { TopAppsByHostForm };
