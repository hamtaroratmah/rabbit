import { View,StyleSheet,Text, Pressable } from "react-native";
import { Image } from "react-native-elements";


const ProfileScreen = () =>{
    return (
        <View style={styles.view}>
            <View  style={styles.container} >
                <Text style={styles.title}>My Profile</Text>
            </View>
            <View  style={styles.bodyStyle} >
                <View style={styles.userInfo}>
                    <Image  source={require('../../assets/img/avatar.jpg')} style={styles.userAvatar}/>
                    <Text style={styles.userInfoText}>Hello username ! </Text>
                </View>
                <View style={styles.boxContainer}>
                    <View style={styles.box}>
                        <Text style={styles.boxText}>60 points</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.boxText} >Level 1 </Text>
                    </View>
                </View>
                <View style={styles.menuContainer}>
                    <View style={styles.menuItem}>
                        <Pressable ><Text style={styles.menuItemText} >My habbits</Text></Pressable>
                    </View>
                    <View style={styles.menuItem}>
                        <Pressable ><Text style={styles.menuItemText} >My challenges</Text></Pressable>
                    </View>
                    <View style={styles.menuItem}>
                        <Pressable ><Text style={styles.menuItemText} >Update my profle</Text></Pressable>
                    </View>
                    <View style={styles.menuItem}>
                        <Pressable ><Text style={styles.menuItemText} >Log out</Text></Pressable>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    view:{
        flex: 1,
        flexDirection:'column',
        backgroundColor: '#007271',
    },
    container: {
        alignItems:'flex-start',
        justifyContent:'center',
        height:90
    },
    title:{
        //backgroundColor: "#ffffff",
        color:'white',
        fontSize:25,
        fontWeight:'bold',
        margin:30
    },
    bodyStyle: {
        padding:20,
        justifyContent:'center',
        alignItems:'center',
        //alignContent:'center',
        borderTopStartRadius:35,
        borderTopEndRadius:35,
        backgroundColor:'white'
    },
    userInfo: {
        height:'20%',
        alignItems:'center',
        justifyContent:'center'
    },
    userInfoText:{
        color:'#0f4e67',
        fontSize:20,
        margin:8
    },
    userAvatar:{
        width:80,
        height:80,
        overflow:'visible',
        borderRadius:80/2
    },
    boxContainer:{
        justifyContent:'space-around',
        flexDirection:'row-reverse'
    },
    box:{
        width:150,
        height:90,
        backgroundColor:'#fa9f5a',
        margin:20,
        borderRadius:25,
        shadowColor: "#0E0D0D",
        shadowOffset: {
        width: 3,
        height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        alignItems:'center',
        justifyContent:'center'
    },
    boxText : {
        color:'white',
        fontSize:18
    },
    menuContainer:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'flex-start',
        width:300,
        height:'40%',
        borderWidth:1,
        borderRadius:25,
        borderColor:"#ebecf0"
    },
    menuItem:{
        height:"25%",
        width:"100%",
        paddingLeft:20,
        //backgroundColor:'red',
        borderColor:'#ebecf0',
        borderBottomWidth:1,
        justifyContent:'center'
    },
    menuItemText:{
        color:"#0f4e67",
        fontSize:18,     
    } 
});

export default ProfileScreen;