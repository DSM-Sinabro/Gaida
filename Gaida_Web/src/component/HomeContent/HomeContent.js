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
    console.log(this.props.popularGaida);
    return(
         <div className = {this.props.isSideMenuOpen ? styles.homeContent : styles.homeContent__menuout}>
          <div className = {styles.recommendService}>
            <NameHeader subjectTitle = "추천 서비스"/>
            <div className = {styles.service__content}>
              <RecommendVideo />
              <RecommendVideo />
            </div>
          </div>
          <div className = {styles.popularGaida}>
            <NameHeader subjectTitle = "인기 가이다"/>
            <div className = {styles.service__content}>
              {
                this.props.popularGaida.map((contents, i) => {
                  return (
                    <PopularVideo
                    rank = {contents.rank}
                    title = {contents.title}
                    artist = {contents.artist}
                    key = {i}
                    />
                  )
                })
              }
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