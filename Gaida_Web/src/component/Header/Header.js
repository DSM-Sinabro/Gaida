import React from 'react';
import Menubar from './MenuBar';
import styles from './styles.scss';
import SearchBar from './SearchBar';
import Logo from '../assets/Logo';

class Header extends React.Component {
  render(){
    return(
      <div className = {styles.header}>
        <Menubar />
        <Logo />
        <SearchBar />
      </div>
    )
  }
}
export default Header;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             