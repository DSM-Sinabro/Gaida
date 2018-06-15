import React from 'react';
import Login from '../component/Login/LoginModal';
import Join from '../component/Join/JoinModal';
import { Route, Switch } from 'react-router-dom';

class Auth extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <Switch>
                <Route exact path="/" component = { Login }/>
                <Route path = '/join' component = { Join }/>
            </Switch>
        )
    }
}

export default Auth