import React from 'react';
import PropTypes from 'prop-types';
import * as ReactLeaflet from 'react-leaflet';

export default ReactLeaflet.withLeaflet || (Component => {
  const LeafletComponent = (props, context) => (
    <Component {...props} leaflet={context} />
  );

  LeafletComponent.contextTypes = {
    layerContainer: PropTypes.any,
    map: PropTypes.any
  };

  return LeafletComponent;
});
