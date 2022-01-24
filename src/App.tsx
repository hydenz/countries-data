import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyles';
import Header from './components/Header/Index';
import Main from './pages/Main/Index';
import { lightTheme } from './themes/themes';
import Country from './pages/Country/Index';

function App() {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Header />
        <Router>
          <Switch>
            <Route path='/:country'>
              <Country />
            </Route>
            <Route path='/'>
              <Main />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
