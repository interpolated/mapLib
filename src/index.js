import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));


import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

class SimpleExample extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13,
    };
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <Popup>
            <span>A sdafasf CSS3 popup. <br /> Easily customizable.</span>
          </Popup>
        </Marker>
      </Map>
    );
  }
}

ReactDOM.render(<SimpleExample />, document.getElementById('root'));