import React from 'react';
import styles from './styles.scss';
import List from './List';
import { connect } from 'react-redux';
import { control_sidemenu } from '../../action/app';

class SideMenu extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isSideMenuOpen : 1
    }
  }
  render() {
    console.log(this.state.isSideMenuOpen)
    return(
      <div className = { this.props.isSideMenuOpen ? styles.sidemenu : styles.sidemenu__hidden }>
        <ul>
          <List />
        </ul>
      </div>
    )
  }
}

SideMenu.getDerivedStateFromProps = (nextprops, prevstate) => {
  if(nextprops.isSideMenuOpen == prevstate.isSideMenuOpen)
  {
    return null;
  }
  return {
    isSideMenuOpen : nextprops.isSideMenuOpen
  }
}

const mapStateToProps = (state) => {
  return {
    isSideMenuOpen: state.reducer.isSideMenuOpen
  }
}

SideMenu = connect(mapStateToProps, undefined)(SideMenu);

export default SideMenu;