import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import WelcomeScreen from "./screens/WelcomeScreen";
import TabNavigator from "./navigation/TabNavigator";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
<<<<<<< HEAD
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
=======
import AddActivityScreen from "./screens/AddActivityScreen";
import FormAddPersonalGoal from "./screens/FormAddPersonalGoal";
import FormCreateChallenge from "./screens/FormCreateChallenge";
import JoinChallengeScreen from "./screens/JoinChallengeScreen";
import HomePageScreenUser from "./screens/HomePageScreenUser";
import HomePageScreenNewUser from "./screens/HomePageScreenNewUser";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Welcome"
				screenOptions={{headerShown: false}}
			>
				<Stack.Screen name="TabNavigator" component={TabNavigator}/>
				<Stack.Screen name="SignIn" component={SignInScreen}/>
				<Stack.Screen name="SignUp" component={SignUpScreen}/>
				<Stack.Screen name="Welcome" component={WelcomeScreen}/>
				<Stack.Screen name="AddActivityScreen" component={AddActivityScreen}/>
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
			</Stack.Navigator>
		</NavigationContainer>
	);
>>>>>>> origin/service
}

export default App;
