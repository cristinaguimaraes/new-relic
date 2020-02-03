import React from 'react';
import {Routes} from "./components/Routes";
import {GlobalStyles} from './styles/global';
import {DefaultErrorBoundary} from "./components/DefaultErrorBoundary";
import {App} from './App.styled';

function app() {

  return (
      <App>
          <DefaultErrorBoundary>
              <GlobalStyles />
                <Routes/>
          </DefaultErrorBoundary>
      </App>

  );
}

export default app;
