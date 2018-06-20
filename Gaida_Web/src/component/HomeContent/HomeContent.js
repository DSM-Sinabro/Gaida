import React from 'react';
import styles from './styles.scss';
import { connect } from 'react-redux';
import { control_sidemenu } from '../../action/app';
import RecommendVideo from '../Video/RecommendVideo';
import PopularVideo from '../Video/PopularVideo';
import NameHeader from '../assets/NameHeader';

class HomeContent extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    console.log(this.props.isSideMenuOpen)
    return(
         <div className = {this.props.isSideMenuOpen ? styles.homeContent : styles.homeContent__menuout}>
          <div className = {styles.recommendService}>
            <NameHeader subjectTitle = "추천 서비스"/>
            <RecommendVideo />
            <RecommendVideo />
          </div>
          <div className = {styles.popularGaida}>
            <NameHeader subjectTitle = "인기 가이다"/>
            <div className = {styles.popularGaida__template}>
              <PopularVideo />
              <PopularVideo />
              <PopularVideo />
              <PopularVideo />
            </div>
          </div>
        </div>  
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isSideMenuOpen : state.reducer.isSideMenuOpen
  }
}

HomeContent = connect(mapStateToProps, undefined)(HomeContent);

export default HomeContent;