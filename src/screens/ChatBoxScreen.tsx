import { View,StyleSheet,Text, FlatList,ScrollView, Pressable } from "react-native";
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
                    renderItem={({ item }) => <View  style={styles.box} ><Item title={item.title} description={item.description} objective={item.objective} action={()=> navigation.navigate('Profile')}/></View>} 
                    style={styles.box}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    view : {
        flex:1,
        alignItems:"flex-start",
        flexDirection:"column",
    },
    boxText : {
        color:'black',
        fontSize:18
    },
    box:{
        width:"100%",
        margin:20,
        //backgroundColor:'red',
        borderColor:'#ebecf0',
        borderBottomWidth:1,
    }
});

export default ChatBoxScreen;