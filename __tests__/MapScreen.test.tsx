import {it, describe, expect, jest} from '@jest/globals';
import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FetchUserBenefitsUseCase} from '../src/domain/usecases/FetchUserBenefitUseCase';
import {MapScreen} from '../src/presentation/screens';
import {RootStackParamList} from '../App';

jest.mock('../src/infrastructure/repositories/BenefitRepositoryImpl');
jest.mock('../src/domain/usecases/FetchUserBenefitUseCase');

const Stack = createNativeStackNavigator<RootStackParamList>();

const mockFetchUserBenefitsUseCase =
  FetchUserBenefitsUseCase as jest.MockedClass<typeof FetchUserBenefitsUseCase>;

const MockedNavigator = ({userId}: {userId: string}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Map"
          component={MapScreen}
          initialParams={{userId}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

describe('MapScreen', () => {
  it('should fetch and display user benefits', async () => {
    const mockBenefits = [
      {
        id: '1',
        lat: -12.1207698,
        lng: -77.0304079,
        title: 'KFC Miraflores',
        image:
          'https://lh3.googleusercontent.com/p/AF1QipMgTanJHISBSaD6fxt7qbBUFdPyumYn_IV8_acR=s1360-w1360-h1020',
      },
      {
        id: '2',
        lat: -12.1209514,
        lng: -77.0303299,
        title: 'Pinkberry Miraflores',
        image:
          'https://lh5.googleusercontent.com/p/AF1QipPmHePOBo_poF-iS6iTjebY-liHogzgDXc6hoDi=s1354-k-no',
      },
    ];

    mockFetchUserBenefitsUseCase.prototype.execute.mockResolvedValueOnce(
      mockBenefits,
    );

    const {getByText} = render(<MockedNavigator userId="12345" />);

    await waitFor(() => {
      expect(
        mockFetchUserBenefitsUseCase.prototype.execute,
      ).toHaveBeenCalledWith('12345');
      expect(getByText('KFC Miraflores')).toBeTruthy();
      expect(getByText('Pinkberry Miraflores')).toBeTruthy();
    });
  });
});
