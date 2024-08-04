import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

type RootStackParamList = {
  Login: undefined;
  Map: undefined;
};
type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

export const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          value={email}
          style={styles.inputText}
          placeholder="juanpablocs21@gmail.com"
          placeholderTextColor="#AFAFAF"
          onChangeText={_email => setEmail(_email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          value={password}
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#AFAFAF"
          onChangeText={_password => setPassword(_password)}
        />
      </View>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate('Map')}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <View style={styles.actions}>
        <TouchableOpacity style={{marginHorizontal: 15}}>
          <Text>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.singUp}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {
    width: '80%',
    backgroundColor: '#ffffff',
    borderRadius: 25,
    height: 50,
    borderWidth: 1,
    borderColor: '#000000',
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: '#ffffff',
    fontWeight: '600',
  },
  singUp: {
    color: '#39B54A',
    fontWeight: '500',
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#000000',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  loginText: {
    color: '#ffffff',
    fontWeight: '800',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  logoView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
    marginTop: 0,
  },
  logo: {
    marginBottom: 25,
    width: 250,
    height: 100,
  },
});
