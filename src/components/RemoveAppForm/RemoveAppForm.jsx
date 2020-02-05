import React, {useState} from "react";
import {
  Helper,
  Input,
  Label,
  Form,
  Button,
  ButtonWrapper,
  Title
} from "./styled";
import {func, string, shape, arrayOf} from "prop-types";

const RemoveAppForm = ({onDeleteApp, onShowToastMessage, data}) => {
  const [name, setName] = useState('');
  const [error, setError] = useState();

  const handleOnSubmit = event => {
    event.preventDefault();

    if (!name) {
      setError("Please add the name");
    } else {
      const appIndex = data.findIndex(eachApp => eachApp.name === name);
      if (appIndex !== -1) {
        onDeleteApp({appIndex});
        //If 'onDeleteApp' was dispatching an action calling the API, the toast should appear just in case of Success. It is here because of the scope of the project.
        onShowToastMessage({messageKey: "App successfully deleted", type: 'success'});
      } else {
        onShowToastMessage({messageKey: "App's name doesn't exist", type: 'failure'});
      }
      setName("");
    }
  };

  const handleOnChange = event => {
    setName(event.target.value);
    setError("");
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <Title>Remove App</Title>
      <Label>App Name:</Label>
      <Input name="name" type="text" value={name} onChange={handleOnChange}/>
      {error && <Helper>{error}</Helper>}
      <ButtonWrapper>
        <Button type="submit">Remove</Button>
      </ButtonWrapper>
    </Form>
  );
};

RemoveAppForm.propTypes = {
  onDeleteApp: func.isRequired,
  onShowToastMessage: func.isRequired,
  data: arrayOf(shape({name: string}))
};

export {RemoveAppForm};
