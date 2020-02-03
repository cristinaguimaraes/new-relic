import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home } from '../../pages/Home';
import { AppsByHost } from '../../pages/AppsByHost';
import {TopApps} from "../../pages/TopApps";


const Routes = () => {
  
  return (
    <div >
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/AppsByHost' component={AppsByHost}/>
        <Route path='/TopApps/:id' component={TopApps}/>
      </Switch>
    </div>
  )
};


export { Routes };
