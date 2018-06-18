import React from 'react';
import Login from '../component/Login/LoginModal';

class LoginContainer extends React.Component {
  constructor(props)
  {
    super(props);
  }
  render() {
    return(
      <React.Fragment>
        <Login />
      </React.Fragment>
    )
  }
}

export default LoginContainer;