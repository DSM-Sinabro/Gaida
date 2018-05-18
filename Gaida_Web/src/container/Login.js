import React from 'react';
import AuthModal from '../component/Login/AuthModal';

class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <AuthModal />
            </div>
        )
    }
}

export default Login;