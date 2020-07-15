import React, {Suspense} from 'react';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';

const Home = React.lazy(() => import('./components/Home'));
const About = React.lazy(() => import('./components/About'));


export const Routes = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </Suspense>
  </Router>
);
