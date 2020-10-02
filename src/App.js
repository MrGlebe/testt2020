import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Home} from './pages/home';
import {About} from './pages/about';
import {Navbar} from './components/Navbar';
import {Alert} from './components/Alert';
import {AlertState} from './context/alert/AlertState';
import {FirebaseState} from './context/firebase/FirebaseState';

function App() {
  return (
      <AlertState>
      <FirebaseState>
          <BrowserRouter>
            <Navbar />
            <div className="container pt-4">
              <Alert />
              <Switch>
                <Route path={'/'} component={Home} exact />
                <Route path={'/about'} component={About} exact />
              </Switch>
            </div>
          </BrowserRouter>
      </FirebaseState>
      </AlertState>
  );
}

export default App;
