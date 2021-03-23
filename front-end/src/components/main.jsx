import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Login from './authentication/login'
import Logout from './authentication/logout'

import EisenhowerMatrix from './eisenhower/container'


class Main extends Component{
    render(){
        return (
            <Router>
                <Switch>
                    <Route path='/eisenhower'>
                        <EisenhowerMatrix/>
                    </Route>
                    <Route path='/login'>
                        <Login/>
                    </Route>
                    <Route path='/logout'>
                        <Logout/>
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default Main