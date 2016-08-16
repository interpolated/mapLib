import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {ProjectMarker} from './marker';

class LeafletMap extends React.Component {
  constructor() {
    super();
    this.cState = {
      lat: -34.0,
      lng: 151.1,
      zoom: 8,
    };
  }

  greenIcon = L.icon({
      iconUrl: 'https://cdn3.iconfinder.com/data/icons/farm-animals/128/cat-512.png',

      iconSize:     [38, 95], // size of the icon
      shadowSize:   [0, 0], // size of the shadow
      iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });

  RenderProjectMarkerList = (project) => {
    return(this.props.projects.map((project)=>{
      console.log(project.location)
      return(
        <Marker icon = {this.greenIcon}
          position = {project.location}
          key = {project.id}>
          <Popup>
            <span>
              {project.name} <br/>
              {project.people}
            </span>
          </Popup>
        </Marker>
      )
    })
    )
  }
 
  render() {
    const position = [this.cState.lat, this.cState.lng];
    return (
      <div className = "block project-map">
        <Map center={position} zoom={this.cState.zoom}>
          {this.RenderProjectMarkerList()}
          <TileLayer
            url='http://api.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZ2FydGhkYmVldGxlIiwiYSI6ImNpcHl5emhrdjB5YmxoY25yczF6MHhhc2IifQ.2Ld30uLqcffVv-RUAWk_qQ'
            attribution='<a href="https://www.mapbox.com/about/maps/" target="_blank">&copy; Mapbox &copy; OpenStreetMap</a> <a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a>'
          />
        </Map>
      </div>
    );
  }
}

function mapStateToProps (state){
  return {
    projects: state.projects
  }
}

function mapDispatchToProps(dispatch){
  return 
}

export default connect(mapStateToProps)(LeafletMap);

