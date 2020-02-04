import React, {useState} from 'react';
import {Helper, Input, Label, Form, Button, ButtonWrapper} from './styled';
import { func} from "prop-types";
import {Title} from "../AddAppForm/styled";

const RemoveAppForm  =({onDeleteApp, onShowToastMessage}) => {
  const [name, setName] = useState();
  const [error, setError] = useState();

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (!name) {
        setError('Please add the name');
    } else {

    onDeleteApp({name});
    onShowToastMessage({messageKey: 'App successfully deleted'});
    setName('');
  }
};

    const handleOnChange = (event) => {
        setName(event.target.value);
        setError( '')
    };

    return (
        <Form onSubmit={handleOnSubmit} >
            <Title>Remove App</Title>
          <Label>App Name:</Label>
          <Input name='name' type='text' value={name} onChange={handleOnChange}/>
          {error && <Helper>{error}</Helper>}
          <ButtonWrapper>
              <Button  type="submit" >Remove</Button>
          </ButtonWrapper>
        </Form>
    )

};

RemoveAppForm.propTypes = {
  onDeleteApp: func.isRequired,
  onShowToastMessage: func.isRequired
};

export { RemoveAppForm};
