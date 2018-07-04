import React from 'react';
import Join from '../component/Join/JoinModal';

class JoinContainer extends React.Component {
  constructor(props)
  {
    super(props);
  }
  render() {
    return(
      <React.Fragment>
        <Join />
      </React.Fragment>
    )
  }
}

export default JoinContainer;