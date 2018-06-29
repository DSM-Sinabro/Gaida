import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Login from './container/LoginContainer';
import Join from './container/JoinContainer';
import SetInterest from './container/InterestContainer';
import Main from './container/Main';
import Gaida from './container/Gaida';
import ContentView from './container/ContentView';

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
                <Route path = "/setinterest" component = { SetInterest }/>
                <Route path = "/gaida" component = { Gaida }/>
                <Route path = "/viewContent" component = { ContentView }/>
            </Switch>
        );
    }
}

export default App;