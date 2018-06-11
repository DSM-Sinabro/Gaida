import React from 'react';
import Login from './container/Login';
import Join from './container/Join';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
                <Switch>
                    <Route exact path="/" component = { Login }/>
                    <Route path = '/join' component = { Join }/>
                </Switch>
        );
    }
}

export default App;