import React from 'react';
import styles from './styles.scss';
import List from './List';

class SideMenu extends React.Component {
  render() {
    return(
      <div className = {styles.sidemenu}>
        <ul>
          <List />
        </ul>
      </div>
    )
  }
}

export default SideMenu;