import React from 'react';
import { View } from 'react-native';

const MockMapView = (props) => <View {...props} />;
const MockMarker = (props) => <View {...props} />;

export const MapView = MockMapView;
export const Marker = MockMarker;
export const MarkerPressEventData = jest.fn();
export default MapView;
