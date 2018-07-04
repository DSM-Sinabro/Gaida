import React from 'react';
import PopularVideoForList from '../Video/PopularVideoForList';
import SelectCategory from './SelectCategory';
import styles from './styles.scss';

class Gaida extends React.Component {
  render() {
    return(
      <React.Fragment>
        <div className = {styles.gaida}>
        <SelectCategory />
        {
          this.props.popularGaida.map((content, i) => {
            return(
              <PopularVideoForList
              rank = {content.rank}
              title = {content.title}
              artist = {content.artist}
              thumbnail = {content.thumbnail}
              key = {i}
              />
            )
          })
        }
        </div>
      </React.Fragment>
    )
  }
}

export default Gaida;