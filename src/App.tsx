import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
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
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
