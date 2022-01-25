import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import Analytics from '../pages/Analytics'

import Auth from '../pages/Auth/Auth'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/users' component={Customers}/>
            <Route path='/analytics' component={Analytics}/>
            <Route path='/auth' component={Auth} />
      
        </Switch>
    )
}

export default Routes
