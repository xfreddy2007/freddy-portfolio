import React, { Suspense } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';

import './App.css';

const About = React.lazy(() => {
  return import('./containers/About/About');
});

const Works = React.lazy(() => {
  return import('./containers/Works/Works');
});

const Contact = React.lazy(() => {
  return import('./containers/Contact/Contact');
});

const app = props => {

  let routes = (
    <Switch>
      <Route path="/about" render={(props) => <About {...props}/>}/>
      <Route path="/works" render={(props) => <Works {...props}/>}/>
      <Route path="/contact" render={(props) => <Contact {...props}/>}/>
      <Route path="/" exact component={Home}/>
      <Redirect to="/" />
    </Switch>
  );

  return (
    <div>
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>
          {routes}
        </Suspense>
      </Layout>
    </div>
  );
}

export default withRouter(app);
