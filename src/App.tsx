import React from 'react';
import './App.css';
import {Unauthenticated} from 'unauthenticated-app/index'
import {AuthenticateApp} from './authenticate-app'
import { UserAuth } from 'context/auth-context';
function App() {
  const {user} = UserAuth()
  return (
    <div className="App">
      {
        user?<AuthenticateApp/>:<Unauthenticated/>
      }
    </div>
  );
}

export default App;
