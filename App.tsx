import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './components/WelcomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogInScreen from './components/LogInScreen';
import SignInScreen from './components/SinInScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Welcome' component={WelcomeScreen} />
          <Stack.Screen name='LogIn' component={LogInScreen} />
          <Stack.Screen name='SignIn' component={SignInScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}


