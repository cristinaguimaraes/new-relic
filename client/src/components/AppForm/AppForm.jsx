import React, {useState} from 'react';
import {Helper, Input, Label, Form, Button} from './styled';
import { func} from "prop-types";

const AppForm  =({onAddApp}) => {
  const [app, setApp] = useState({
    name: '',
    contributors: [],
    version: '',
    host: [],
    apdex: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    contributors: '',
    version: '',
    host: '',
    apdex: ''
  });
  
  const handleChange = (event) => {
    console.log(event.target.value, event.target.name)
    const value = (event.target.name === 'contributors' || event.target.name === 'host') ? event.target.value.split(',') :event.target.value;
    setApp({... app, [event.target.name]: value});
    setErrors({...errors,[event.target.name]:'' })
  };

 const handleSubmit = (event) => {
   event.preventDefault();
   onAddApp({app});
   setApp({name: '',
     contributors: [],
     version: '',
     host: [],
     apdex: ''});
  };

    return (
      <div className='popup'>
        <Form onSubmit={handleSubmit} >
          <Label>App Name:</Label>
          <Input name='name' type='text' value={app.name} onChange={handleChange} />
          <Label>Contributors:</Label>
          <Input name='contributors' type='text' value={app.contributors.toString()} onChange={handleChange} />
          <Label>Apdex:</Label>
          <Input name='apdex' type='text' value={app.apdex} onChange={handleChange} />
          <Label>Version:</Label>
          <Input name='version' type='text' value={app.version} onChange={handleChange} />
          <Label>Host:</Label>
          <Input name='host' type='text' value={app.host.toString()} onChange={handleChange} />
          <Button  type="submit" >Add</Button>
          {Object.values(errors).length > 0 && <Helper>
            Review the form
          </Helper>
          }
        </Form>
      </div>
    )

};

AppForm.propTypes = {
  onAddApp: func.isRequired
};

export { AppForm};
