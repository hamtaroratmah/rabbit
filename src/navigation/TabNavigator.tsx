import React from "react"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import HomeStack from "../navigation/HomeStack"
import PageStack from "./PageStack";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import ComponentIcon from "../components/CompenentIcon";
import SignInScreen from "../screens/SignInScreen";
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return(
            <Tab.Navigator 
                initialRouteName="HomeStack" 
                screenOptions={{headerShown:false , tabBarShowLabel:false , tabBarStyle:styles.tabBar}}
            >
                <Tab.Screen name="HomeStack" component={HomeStack} options={{tabBarIcon(props) {
                    return (
                        <View style={styles.iconContainer}>
                            <ComponentIcon />
                        </View>
                    )
                },}}/>
                <Tab.Screen name="PageStack" component={SignInScreen} options={{tabBarIcon(props) {
                    return (
                        <View style={styles.iconContainer}>
                            <ComponentIcon />
                        </View>
                    )
                },}}/>
                <Tab.Screen name="hALLO" component={PageStack} options={{tabBarIcon(props) {
                    return (
                        <View style={styles.iconContainer}>
                            <ComponentIcon />
                        </View>
                    )
                },}}/>
                <Tab.Screen name="Stack" component={PageStack} options={{tabBarIcon(props) {
                    return (
                        <View style={styles.iconContainer}>
                            <ComponentIcon />
                        </View>
                    )
                },}}/>
                <Tab.Screen name="Page" component={PageStack} options={{tabBarIcon(props) {
                    return (
                        <View style={styles.iconContainer}>
                            <ComponentIcon />
                        </View>
                    )
                },}}/>
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBar : {
        position:'absolute',
        backgroundColor:'#ffffff',
        borderRadius:20,
        bottom:20,
        left:15,
        right:15,
        height:80,
        shadowColor:'#7f5df0',
        shadowOffset: {
            width:0,
            height:10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5 
    },
    iconContainer : {
        alignItems:'center',
        justifyContent: 'center'
    }
})
export default TabNavigator; 