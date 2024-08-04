import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen, MapScreen} from './src/presentation/screens';

export type RootStackParamList = {
  Login: undefined;
  Map: {userId: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
    return () => {
      console.log('App unmounted');
    };
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{title: 'Iniciar Sesión', headerTransparent: true}}
        />
        <Stack.Screen
          name="Map"
          component={MapScreen}
          options={{title: 'Que buscas?', headerTransparent: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
