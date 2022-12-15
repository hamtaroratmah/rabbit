import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./src/navigation/HomeStack";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import TabNavigator from "./src/navigation/TabNavigator";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import AddActivityScreen from "./src/screens/AddActivityScreen";
import FormAddPersonalGoal from "./src/screens/FormAddPersonalGoal";
import FormCreateChallenge from "./src/screens/FormCreateChallenge";
import JoinChallengeScreen from "./src/screens/JoinChallengeScreen";
import HomePageScreenUser from "./src/screens/HomePageScreenUser";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="AddActivityScreen" component={AddActivityScreen} />
        <Stack.Screen
          name="FormAddPersonalGoal"
          component={FormAddPersonalGoal}
        />
        <Stack.Screen
          name="FormCreateChallenge"
          component={FormCreateChallenge}
        />
        <Stack.Screen
          name="JoinChallengeScreen"
          component={JoinChallengeScreen}
        />

        <Stack.Screen
          name="HomePageScreenUser"
          component={HomePageScreenUser}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
