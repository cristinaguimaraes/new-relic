import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home } from '../../pages/Home';
import { AppsByHost } from '../../pages/AppsByHost';


const Routes = () => {
  
  return (
    <div >
      <Switch>
        <Route exact path='/' component={Home} />
        {/*<Route path='/TopApps' component={TopApps}/>*/}
        <Route path='/AppsByHost' component={AppsByHost}/>
      </Switch>
    </div>
  )
};


export { Routes };
