
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePageScreenUser from "../screens/HomePageScreenUser";
import HomePageScreenNewUser from "../screens/HomePageScreenNewUser";


const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (

      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen 
          name="HomePageUser"
          component={HomePageScreenUser}
        />
        <Stack.Screen 
          name="HomePageNewUser"
          component={HomePageScreenNewUser}
        />
      </Stack.Navigator> 
  
  );
}
