import { View,StyleSheet,Text, FlatList,ScrollView, Pressable } from "react-native";
import { Image } from "react-native-elements";
import CostumedHeader from "../components/CostumedHeader";

export type  Props = {
    title : string,
    description : string,
    objective:string,
    action:any
}
const Item = ({title , description, objective,action}:Props) => (
    <Pressable  onPress={action}>
        <Text style={styles.boxText} >{title} </Text>
    </Pressable>
);

const DATA = [
    {
      id:1,
      title: "Challenge Tiltle",
      description:"challenge description",
      objective:"objective"
    },
    {
        id:2,
        title: "Challenge Tiltle",
        description:"challenge description",
        objective:"objective"
    },
    {
        id:3,
        title: "Challenge Tiltle",
        description:"challenge description",
        objective:"objective"
    },
    {
        id:4,
        title: "Challenge Tiltle",
        description:"challenge description",
        objective:"objective"
    },
    {
        id:5,
        title: "Challenge Tiltle",
        description:"challenge description",
        objective:"objective"
      },
      {
          id:6,
          title: "Challenge Tiltle",
          description:"challenge description",
          objective:"objective"
      },
      {
          id:7,
          title: "Challenge Tiltle",
          description:"challenge description",
          objective:"objective"
      },
      {
          id:8,
          title: "Challenge Tiltle",
          description:"challenge description",
          objective:"objective"
      }
  ];

const ChatBoxScreen = ({navigation}) =>{
    return (
        <ScrollView >
            <CostumedHeader titlePage="Chat Box" text=""/>
            <View style={styles.view}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) =>
                    <View  style={styles.box} >
                        <View style={styles.ChallengeInfo}>
                        <View style={styles.imgWrapper}>
                             <Image source={require('../../assets/img/avatar.jpg')}  style={styles.image}/>
                        </View>
                        <View style={styles.TextSection}>
                            <View style={styles.UserInfoText}>
                                <Item title={item.title} description={item.description} objective={item.objective} action={()=> navigation.navigate('Profile')}/>
                            </View>
                        </View>
                        </View>
                    </View>} 
                    style={styles.box}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    view : {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
        backgroundColor: '#ffffffv '
    },
    boxText : {
        fontSize: 14,
        fontWeight: "bold",
        fontFamily: 'Lato-Regular',
    },
    box:{
        width:" 100%",
    },
    ChallengeInfo:{
        flexDirection: "row",
        justifyContent: "space-between",
    },
    imgWrapper:{
        paddingTop: 15,
        paddingBottom: 15,
    },
    image:{
        width: 50,
        height: 50,
        borderRadius: 25,
        overflow:'scroll'
    },
    TextSection :{
        flexDirection: "column",
        justifyContent: "center",
        padding: 15,
        paddingLeft: 0,
        marginLeft: 10,
        width: 300,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc"
    },
    UserInfoText :{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 5,
    }
});

export default ChatBoxScreen;