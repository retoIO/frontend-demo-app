import {it, describe, expect, jest} from '@jest/globals';
import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginUseCase} from '../src/domain/usecases/LoginUseCase';
import {LoginScreen, MapScreen} from '../src/presentation/screens';
import {RootStackParamList} from '../App';

jest.mock('../src/domain/usecases/LoginUseCase');

const Stack = createNativeStackNavigator<RootStackParamList>();

const mockLoginUseCase = LoginUseCase as jest.MockedClass<typeof LoginUseCase>;

const MockedNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

describe('LoginScreen', () => {
  it('should navigate to Map on successful login', async () => {
    mockLoginUseCase.prototype.execute.mockResolvedValueOnce({
      id: '12345',
      email: 'juanpablocs21@gmail.com',
      name: 'Juan Pablo',
    });

    const {getByPlaceholderText, getByText} = render(<MockedNavigator />);

    fireEvent.changeText(
      getByPlaceholderText('juanpablocs21@gmail.com'),
      'test@gmail.com',
    );
    fireEvent.changeText(getByPlaceholderText('Password'), 'password');
    fireEvent.press(getByText('LOGIN'));

    await waitFor(() => {
      expect(mockLoginUseCase.prototype.execute).toHaveBeenCalledWith(
        'test@gmail.com',
        'password',
      );
    });
  });
});
