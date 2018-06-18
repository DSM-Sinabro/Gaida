import React from 'react';
import styles from './interest.scss';

class Card extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cardImage : [
        {categoryName : '예술', imageUrl : require('../../../assets/picture.jpg')},
        {categoryName : '예술', imageUrl : require('../../../assets/picture.jpg')},
        {categoryName : '예술', imageUrl : require('../../../assets/picture.jpg')},
        {categoryName : '예술', imageUrl : require('../../../assets/picture.jpg')},
        {categoryName : '예술', imageUrl : require('../../../assets/picture.jpg')},
        {categoryName : '예술', imageUrl : require('../../../assets/picture.jpg')},
        {categoryName : '예술', imageUrl : require('../../../assets/picture.jpg')},
        {categoryName : '예술', imageUrl : require('../../../assets/picture.jpg')},
        {categoryName : '예술', imageUrl : require('../../../assets/picture.jpg')},
        {categoryName : '예술', imageUrl : require('../../../assets/picture.jpg')},
        {categoryName : '예술', imageUrl : require('../../../assets/picture.jpg')},
        {categoryName : '예술', imageUrl : require('../../../assets/picture.jpg')},
        {categoryName : '예술', imageUrl : require('../../../assets/picture.jpg')},
        {categoryName : '예술', imageUrl : require('../../../assets/picture.jpg')},
        {categoryName : '예술', imageUrl : require('../../../assets/picture.jpg')},
        {categoryName : '예술', imageUrl : require('../../../assets/picture.jpg')},
        {categoryName : '예술', imageUrl : require('../../../assets/picture.jpg')},
        {categoryName : '예술', imageUrl : require('../../../assets/picture.jpg')},
        {categoryName : '예술', imageUrl : require('../../../assets/picture.jpg')},
        {categoryName : '예술', imageUrl : require('../../../assets/picture.jpg')},

      ]
    }
  }
  render() {
    return(
      <React.Fragment>
        {
          this.state.cardImage.map((card, i) => {
            return(
              <div className = {styles.card} key = {i} >
                <input type= "checkbox" name = "hello"/>
                {/* <div className = {styles.categoryName}>asdf</div> */}
                {/* <img src = {card.imageUrl} /> */}
              </div>
            )
          })
        }
      </React.Fragment>
    )
  }
}

export default Card;