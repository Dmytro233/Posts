import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Users, Posts, EditPost } from './components';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Users} />
        <Route path="/posts/:id" component={Posts} />
        <Route path="/editPost/:id" component={EditPost} />
      </Switch>
    </BrowserRouter>
  );
}
