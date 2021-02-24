import * as React from 'react'

import {Switch, BrowserRouter as Router, Route, Redirect} from 'react-router-dom'

import Orders from './pages/orders'


const Routes : React.FC = (): React.ReactElement => {
    return (
    <Router >
        <Switch>
            <Route path="/orders" component={Orders} />
            <Redirect to="/404" />
        </Switch>
    </Router>
    )
}

export default Routes