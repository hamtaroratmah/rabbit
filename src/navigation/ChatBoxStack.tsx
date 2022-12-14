
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/ProfileScreen";
import ChatBoxScreen from "../screens/ChatBoxScreen";
import ChatScreen from "../screens/ChatScreen";

const Stack = createNativeStackNavigator();

export default function ChatBoxStack() {
  return (
    <Stack.Navigator initialRouteName="chatBoxScreen" screenOptions={{headerShown:false}}>
        <Stack.Screen 
          name="ChatBoxScreen"
          component={ChatBoxScreen}
        />
        <Stack.Screen 
          name="ChatScreen"
          component={ChatScreen}
        />
        <Stack.Screen 
          name="Profile"
          component={ProfileScreen}
        />
    </Stack.Navigator> 
  );
}
