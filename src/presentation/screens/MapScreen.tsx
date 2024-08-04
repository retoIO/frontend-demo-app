import React, {useEffect, useState} from 'react';
import MapView, {
  Marker,
  MarkerPressEventData,
} from '@juanpablocs/rn-interactive-maps';
import {ScrollView, StyleSheet, View} from 'react-native';
import SliderCarousel from '@juanpablocs/rn-slider-carousel';
import {Benefit} from '../../domain/entities/Benefit';
import {BenefitRepositoryImpl} from '../../infrastructure/repositories/BenefitRepositoryImpl';
import {FetchUserBenefitsUseCase} from '../../domain/usecases/FetchUserBenefitUseCase';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../App';

type MapScreenProps = NativeStackScreenProps<RootStackParamList, 'Map'>;

export const MapScreen: React.FC<MapScreenProps> = ({route}) => {
  const {userId} = route.params;
  const [currentMarker, setCurrentMarker] = useState<Marker | undefined>();
  const [currentItem, setCurrentItem] = useState<number>(0);
  const [markers, setMarkers] = useState<Benefit[]>([]);

  const handleMarkerPress = (event: MarkerPressEventData) => {
    const {id} = event;
    setTimeout(() => {
      setCurrentItem(Number(id));
    }, 200);
  };

  const handlerCurrentItem = (id: number) => {
    setCurrentMarker(markers.find(m => m.id === String(id)));
  };

  useEffect(() => {
    if (!userId) {
      return;
    }
    console.log('fetching benefits', {userId});
    const fetchBenefits = async () => {
      const fetchUserBenefitsUseCase = new FetchUserBenefitsUseCase(
        new BenefitRepositoryImpl(),
      );
      const benefits = await fetchUserBenefitsUseCase.execute(userId);
      setMarkers(benefits);
    };

    fetchBenefits();
  }, [userId]);

  return markers.length > 0 ? (
    <View style={styles.container}>
      <MapView
        markers={markers}
        zoom={10}
        style={styles.map}
        onMarkerPress={handleMarkerPress}
        currentMarker={currentMarker}
      />

      <ScrollView
        style={styles.slide}
        contentInsetAdjustmentBehavior="automatic">
        <SliderCarousel
          currentItem={currentItem}
          onCurrentItem={handlerCurrentItem}
          entries={markers.map(m => ({
            image: m.image,
            id: Number(m.id),
            title: m.title,
          }))}
        />
      </ScrollView>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  slide: {
    position: 'absolute',
    width: '100%',
    height: 220,
    bottom: 100,
  },
});
