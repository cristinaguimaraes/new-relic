import React from 'react';
import {Home} from './pages/Home';
import {GlobalStyles} from './styles/global';
import {DefaultErrorBoundary} from "./components/DefaultErrorBoundary";
import {App} from './App.styled';

function app() {

  return (
      <App>
          <DefaultErrorBoundary>
              <GlobalStyles />
                <Home/>
          </DefaultErrorBoundary>
      </App>

  );
}

export default app;
