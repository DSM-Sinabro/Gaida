import React from 'react';
import styles from './styles.scss';


class MenuBar extends React.Component {
  render() {
    return(
      <div className = {styles.menubar} onClick = {this.props.setSideOpen}></div>
    )
  }
}
export default MenuBar;
