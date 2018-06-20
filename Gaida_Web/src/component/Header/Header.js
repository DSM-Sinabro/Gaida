import React from 'react';
import Menubar from './MenuBar';
import styles from './styles.scss';
import SearchBar from './SearchBar';
import Logo from '../assets/Logo';
import { connect } from 'react-redux';
import { control_sidemenu } from '../../action/app';

class Header extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className = {styles.header}>
        <Menubar setSideOpen = {this.props.setSideOpen}/>
        <Logo />
        <SearchBar />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSideOpen: () => {
      dispatch(control_sidemenu());
    }
  }
}

Header = connect(undefined, mapDispatchToProps)(Header);

export default Header;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             