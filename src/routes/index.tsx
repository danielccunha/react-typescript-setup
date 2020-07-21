import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from '../pages/Home';
import Contact from '../pages/Contact';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact to="/" component={Home} />
        <Route to="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};
