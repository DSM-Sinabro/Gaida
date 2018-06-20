import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './container/LoginContainer';
import Join from './container/JoinContainer';
import setInterest from './container/InterestContainer';
import Main from './container/Main';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <Switch>
                <Route exact path = "/" component = { Main }/>
                <Route path = "/login" component = { Login }/>
                <Route path = "/join" component = { Join }/>
                <Route path = "/setinterest" component = { setInterest }/>
            </Switch>
        );
    }
}

export default App;