import React, {useState} from 'react';
import {Helper, Input, Label, Form, Button} from './styled';

export  const AppForm  =({addAppToHosts}) => {
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
    const value = (event.target.name === 'contributors' || event.target.name === 'host') ? event.target.value.split(',') :event.target.value;
    setApp({... app, [event.target.name]: value});
  }
  
  
 const handleSubmit = (event) => {
   event.preventDefault();
   addAppToHosts({app});
   setApp({name: '',
     contributors: [],
     version: '',
     host: [],
     apdex: ''})
  };
  
  console.log('render')

    return (
      <div className='popup'>
        <Form onSubmit={handleSubmit} >
          <Label>App Name:</Label>
            <Input name='name' type='text' value={app.name} onChange={handleChange} />
     
          <Label>
            Contributors:
            <Input name='contributors' type='text' value={app.contributors.toString()} onChange={handleChange} />
          </Label>
          <Label>
            Version:
            <Input name='version' type='text' value={app.version} onChange={handleChange} />
          </Label>
          <Label>
            Apdex:
            <Input name='apdex' type='text' value={app.apdex} onChange={handleChange} />
          </Label>
          <Label>
            Host:
            <Input name='host' type='text' value={app.host.toString()} onChange={handleChange} />
          </Label>
          <Button  type="submit" >Add</Button>
          {Object.values(errors).length > 0 && <Helper>
            Review the form
          </Helper>
          }
        </Form>
      </div>
    )

};
