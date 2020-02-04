import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home } from '../../pages/Home';
import { AppsByHost } from '../../pages/AppsByHost';
import {TopAppsByHost} from "../../pages/TopAppsByHost";


const Routes = () => {
  
  return (
    <div >
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/AppsByHost' component={AppsByHost}/>
        <Route path='/TopAppsByHost/:id' component={TopAppsByHost}/>
      </Switch>
    </div>
  )
};


export { Routes };
