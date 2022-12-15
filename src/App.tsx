import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "./screens/WelcomeScreen";
import TabNavigator from "./navigation/TabNavigator";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import AddActivityScreen from "./screens/AddActivityScreen";
import FormAddPersonalGoal from "./screens/FormAddPersonalGoal";
import FormCreateChallenge from "./screens/FormCreateChallenge";
import JoinChallengeScreen from "./screens/JoinChallengeScreen";
import HomePageScreenUser from "./screens/HomePageScreenUser";
import HomePageScreenNewUser from "./screens/HomePageScreenNewUser";
import DetailsActivityScreen from "./screens/DetailsActivityScreen";
import DetailsChallengeScreen from "./screens/DetailsChallengeScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ProfileScreen"
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
        <Stack.Screen
          name="HomePageScreenNewUser"
          component={HomePageScreenNewUser}
        />
        <Stack.Screen
          name="DetailsActivityScreen"
          component={DetailsActivityScreen}
        />
        <Stack.Screen
          name="DetailsChallengeScreen"
          component={DetailsChallengeScreen}
        />

        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
