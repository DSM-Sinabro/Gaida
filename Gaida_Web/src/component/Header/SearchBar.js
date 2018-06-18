import React from 'react';
import styles from './styles.scss';

class SearchBar extends React.Component {
  render(){
    return(
      <div className = {styles.searchBar}>
          <input />     
          <div className = {styles.searchBut}></div>   
      </div>
    )
  }
}

export default SearchBar;