import React from 'react';
import {Routes} from "./components/Routes";
import {GlobalStyles} from './styles/global';
import {DefaultErrorBoundary} from "./components/DefaultErrorBoundary";
import {App} from './App.styled';
import { Toast } from './components/Toast/Toast';

function app() {

  return (
      <App>
          <DefaultErrorBoundary>
              <GlobalStyles />
                <Routes/>
            <Toast />
          </DefaultErrorBoundary>
      </App>

  );
}

export default app;
