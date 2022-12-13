import { View,StyleSheet,Text, FlatList,ScrollView, Pressable } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
export type  Props = {
    title : string,
    description : string
    objective:string
}
const Item = ({title , description, objective}:Props) => (
    <Pressable  style={styles.box} >
        <Text style={styles.boxText} >{title} </Text>
        <Text style={styles.boxText} >{description} </Text>
        <Text style={styles.boxText} >{objective} </Text>
    </Pressable>
);

const DATA = [
    {
      id:1,
      title: "Ch.Tiltle",
      description:"challenge description",
      objective:"objective"
    },
    {
        id:2,
        title: "Ch.Tiltle",
        description:"challenge description",
        objective:"objective"
    },
    {
        id:3,
        title: "Ch.Tiltle",
        description:"challenge description",
        objective:"objective"
    },
    {
        id:4,
        title: "Ch.Tiltle",
        description:"challenge description",
        objective:"objective"
    }
  ];

const ChallengesScrren = () =>{
    return (
        <ScrollView style={styles.view}>
            <View  style={styles.container} >
                <Text style={styles.title}>Challenges</Text>
            </View>
            <View style={styles.bodyStyle}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => <Item title={item.title} description={item.description} objective={item.objective}/>} 
                />
            </View>
        </ScrollView>
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
        borderTopStartRadius:35,
        borderTopEndRadius:35,
        backgroundColor:'white'
    },
    boxContainer:{
        justifyContent:'space-around',
        flexDirection:'row-reverse'
    },
    box:{
        width:300,
        height:190,
        backgroundColor:'#f2ceac',
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
    }
});

export default ChallengesScrren;