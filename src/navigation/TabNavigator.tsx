import React from "react"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import HomeStack from "../navigation/HomeStack"
import PageStack from "./PageStack";
import { ImageBackground, ImageComponent, StyleSheet } from "react-native";
import { View } from "react-native";
import ComponentIcon from "../components/CompenentIcon";
import SignInScreen from "../screens/SignInScreen";
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
        height:65,
        
    },
    iconContainer : {
        alignItems:'center',
        justifyContent: 'center'
    }
})
export default TabNavigator; 