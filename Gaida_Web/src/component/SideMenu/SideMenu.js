import React from 'react';
import styles from './styles.scss';
import List from './List';
import { connect } from 'react-redux';
import { control_sidemenu } from '../../action/app';

class SideMenu extends React.Component {
  constructor(props){
    super(props);

  }
  render() {
    return(
      <div className = { this.props.isSideMenuOpen ? styles.sidemenu : styles.sidemenu__hidden }>
        <ul>
          <List />
        </ul>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    isSideMenuOpen: state.reducer.isSideMenuOpen
  }
}

SideMenu = connect(mapStateToProps, undefined)(SideMenu);

export default SideMenu;