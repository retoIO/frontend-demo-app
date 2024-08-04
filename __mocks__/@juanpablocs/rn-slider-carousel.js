import React from 'react';
import { View, Text } from 'react-native';

const SliderCarousel = ({ entries }) => (
  <View>
    {entries.map((entry) => (
      <Text key={entry.id}>{entry.title}</Text>
    ))}
  </View>
);

export default SliderCarousel;

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');