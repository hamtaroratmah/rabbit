
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePageScreenUser from "../screens/HomePageScreenUser";
import HomePageScreenNewUser from "../screens/HomePageScreenNewUser";
import AddActivityScreen from "../screens/AddActivityScreen";
import ActivityDetailsScreen from "../screens/ActivityDetailsScreen";
import DetailsChallengeScreen from "../screens/DetailsChallengeScreen"
import FormCreateChallenge from "../screens/FormCreateChallenge"
const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (

      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen 
          name="HomePageNewUser"
          component={HomePageScreenNewUser}
        />
        <Stack.Screen 
          name="HomePageUser"
          component={HomePageScreenUser}
        />
        <Stack.Screen 
          name="AddActivity"
          component={AddActivityScreen}
        />
        <Stack.Screen 
          name="ActivityDetailsScreen"
          component={ActivityDetailsScreen}
        />
        <Stack.Screen 
          name="DetailsChallengeScreen"
          component={DetailsChallengeScreen}
        />
        <Stack.Screen 
          name="FormCreateChallenge"
          component={FormCreateChallenge}
        />
      </Stack.Navigator> 
  
  );
}
