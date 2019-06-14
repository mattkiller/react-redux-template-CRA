import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import aa from '../containers/aa';
import bb from '../containers/bb';

const Routes = () => (
    <Router>
        <Route exact path="/" render={() => (
            <div>
                <Link to="a">a</Link>
                {' '}
                <Link to="b">b</Link>
            </div> )} />
        <Route path="/a" component={aa} />
        <Route path="/b" component={bb} />
    </Router>
);

export default Routes;
