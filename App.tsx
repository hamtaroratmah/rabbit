
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './src/screens/WelcomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogInScreen from './src/screens/LogInScreen';
import SignInScreen from './src/screens/SinInScreen';

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


