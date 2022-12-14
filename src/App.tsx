import {NavigationContainer} from "@react-navigation/native";
import WelcomeScreen from "./screens/WelcomeScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import 'react-native-gesture-handler';
import TabNavigator from "./navigation/TabNavigator";
import ChatScreen from "./screens/ChatScreen";


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="HomePage" component={TabNavigator}/>
        <Stack.Screen name="Welcome" component={WelcomeScreen}/>
        <Stack.Screen name="SignIn" component={SignInScreen}/>
        <Stack.Screen name="SignUp" component={SignUpScreen}/>
        <Stack.Screen name="ChatScreen" component={ChatScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
