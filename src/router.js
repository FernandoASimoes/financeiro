import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';


function AppRouter() {
  const [user, setUser] = useState();

  return (
    <BrowserRouter>
      {!user ?
        <>
          <Route exact path="/" component={Home} />
        </>
        :
        <>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
        </>
      }
    </BrowserRouter>
  );
}

export default AppRouter;
