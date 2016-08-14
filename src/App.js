import React, { Component } from 'react';
// import SideBar from './components/side-bar';
import LeafletMap from './components/Lmap';

export default class App extends Component {
  render() {
    return (
      <div className="App">
         <LeafletMap/>
      </div>
    );
  }
}
