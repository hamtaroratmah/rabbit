import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./src/navigation/HomeStack";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import TabNavigator from "./src/navigation/TabNavigator";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import AddActivityScreen from "./src/screens/AddActivityScreen";
import ObjectifInputScreen from "./src/screens/ObjectifInputScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ObjectifInputScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="AddActivityScreen" component={AddActivityScreen} />
        <Stack.Screen
          name="ObjectifInputScreen"
          component={ObjectifInputScreen}
        />

        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
