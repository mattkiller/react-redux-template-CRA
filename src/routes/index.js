import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import aa from '../containers/aa';
import bb from '../containers/bb';

const Routes = () => (
    <Router>
        <Route path="/a" component={aa} />
        <Route path="/b" component={bb} />
    </Router>
);

export default Routes;
