import React from "react"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import HomeStack from "../navigation/HomeStack"
import PageStack from "./PageStack";
import { ImageBackground, ImageComponent, StyleSheet } from "react-native";
import { View } from "react-native";
import ComponentIcon from "../components/CompenentIcon";
import SignInScreen from "../screens/SignInScreen";
import { Image } from "react-native-elements";
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return(
            <Tab.Navigator 
                initialRouteName="Home" 
                screenOptions={{headerShown:false , tabBarShowLabel:true , tabBarStyle:styles.tabBar}}
            >
                <Tab.Screen name="Home" component={HomeStack} options={{tabBarIcon(props) {
                    return (
                        <View style={styles.iconContainer}>
                            <ComponentIcon source="home"/>
                        </View>
                    )
                },}}/>
                <Tab.Screen name="Habbits" component={SignInScreen} options={{tabBarIcon(props) {
                    return (
                        <View style={styles.iconContainer}>
                            <ComponentIcon source="habbit"/>
                        </View>
                    )
                },}}/>
                <Tab.Screen name="Chat" component={PageStack} options={{tabBarIcon(props) {
                    return (
                        <View style={styles.iconContainer}>
                            <ComponentIcon source="msg"/>
                        </View>
                    )
                },}}/>
                <Tab.Screen name="Challenges" component={PageStack} options={{tabBarIcon(props) {
                    return (
                        <View style={styles.iconContainer}>
                            <ComponentIcon source="challenge"/>
                        </View>
                    )
                },}}/>
                <Tab.Screen name="Profile" component={PageStack} options={{tabBarIcon(props) {
                    return (
                        <View style={styles.iconContainer}>
                            <ComponentIcon source="profile"/>
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
        left:13,
        right:13,
        height:70,
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