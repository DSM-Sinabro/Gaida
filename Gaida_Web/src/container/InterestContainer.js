import React from 'react';
import Interest from '../component/Interest/InterestModal';

class InterestContainer extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <React.Fragment>
        <Interest />
      </React.Fragment>
    )
  }
}

export default InterestContainer;