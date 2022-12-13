import {NavigationContainer} from "@react-navigation/native";
import WelcomeScreen from "./screens/WelcomeScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import HomePageScreen from "./screens/HomePageScreen";
import { useState } from "react";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="HomePage" component={HomePageScreen}/>
        <Stack.Screen name="Welcome" component={WelcomeScreen}/>
        <Stack.Screen name="SignIn" component={SignInScreen}/>
        <Stack.Screen name="SignUp" component={SignUpScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
