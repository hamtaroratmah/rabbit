import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePageScreen from "../screens/HomePageScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";




const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (

      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen 
          name="HomePage"
          component={HomePageScreen}
        />
      </Stack.Navigator> 
  
  );
}
