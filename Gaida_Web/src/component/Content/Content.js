import React from 'react';
import styles from './styles.scss';
import { connect } from 'react-redux';
import { control_sidemenu } from '../../action/app';

class Content extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return(
      <div className = {this.props.isSideMenuOpen ? styles.homeContent : styles.homeContent__menuout}>
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isSideMenuOpen : state.reducer.isSideMenuOpen
  }
}

Content = connect(mapStateToProps, undefined)(Content);

export default Content;