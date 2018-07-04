import React from 'react';
import styles from './styles.scss';

class SelectCategory extends React.Component {
  render() {
    return(
      <div className = {styles.selectBar}>
        <div className = {styles.custom_select}>
          <select>
            <option>생활</option>
            <option>엔터테인먼트</option>
            <option>게임</option>
          </select>
        </div>
      </div>
    )
  }
}

export default SelectCategory;