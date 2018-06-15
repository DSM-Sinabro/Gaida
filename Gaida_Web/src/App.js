import React from 'react';
import Auth from './container/Auth';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <Auth />
        );
    }
}

export default App;