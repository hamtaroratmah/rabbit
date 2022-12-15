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
import { useContext, useEffect } from "react";
import supabase from "./utils/Client";
import { Context as SessionContext } from "./contexts/SessionContext";
import ActivityDetailsScreen from "./screens/ActivityDetailsScreen";
import GraphProgress from "./components/GraphProgress";
import ProfileScreen from "./screens/ProfileScreen";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  // @ts-ignore
  const { session, defineSession } = useContext(SessionContext);
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      defineSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      defineSession(session);
    });
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="GraphProgress" component={GraphProgress} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="HomePageScreenUser" component={HomePageScreenUser} />


        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="AddActivityScreen" component={AddActivityScreen} />
        <Stack.Screen
          name="ActivityDetailsScreen"
          component={ActivityDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
