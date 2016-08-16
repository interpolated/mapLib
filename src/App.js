import React, { Component } from 'react';
import ProjectList from './components/side-bar';
import LeafletMap from './components/Lmap';

export default class App extends Component {
  render() {
    return (
      <div className="App block-group">
        <ProjectList/>     
        <LeafletMap/>
      </div>
    );
  }
}
