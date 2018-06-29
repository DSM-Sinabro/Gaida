import React from 'react';
import Header from '../component/Header/Header';
import SideMenu from '../component/SideMenu/SideMenu';
import Content from '../component/Content/Content';
import View from '../component/ContentView/ContentView';

class ContentView extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <SideMenu />
        <Content children = { <View /> }/>
      </div>
    )
  }
}

export default ContentView;