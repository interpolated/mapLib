import React from 'react';
import { Marker, Popup } from 'react-leaflet';

export const ProjectMarker = (position, name) => {
  return(
      <Marker position = {position}>
        <Popup>
          <span>{name}</span>
        </Popup>
      </Marker>
    )
}