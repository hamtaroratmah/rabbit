import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Pressable,
} from "react-native";
import { Header } from "react-native-elements";
import { ActivitiesController } from "../controllers/ActivitiesController";
import CostumedHeader from "../components/CostumedHeader";
import {useState,useEffect} from "react"

const AddActivityScreen = ({ navigation }) => {

  const controller = new ActivitiesController();
  const [activities , setActivities] = useState([])

  const getActivities = async () => {
    const data = await controller.getAllActivities()
    //@ts-ignore
    setActivities(data)
    console.log(data);  
  } 
    useEffect(() => {
      getActivities()
    }, [])

  let nbOfColoumns = 2;


  
  return (
    <View style={styles.container}>
      {/** Header */}
      <View style={styles.containerHeader}>
      <Header containerStyle={{ backgroundColor: "#F1F3F3" }} />
        <CostumedHeader
          text="Choose your activity and make a challenge"
          titlePage="Activities"
        />
      </View>

      {/** body => list of activities*/}
      <View style={styles.containerBody}>
        <FlatList
        scrollEnabled={false}
          contentContainerStyle={styles.listActivities}
          numColumns={nbOfColoumns}
          data={activities}
          renderItem={({ item }) => {
            return (
              <Pressable  onPress={() => {navigation.navigate("Home",{screen:"ActivityDetailsScreen" , params: { id_activity: item.id }})}} style={styles.contenairActivity}>
                <Text style={styles.textActivity}>{item.title}</Text>
              </Pressable >
            );
          }}
        />
        {/**Btn add */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F3F3",
  },
  containerHeader:{
    flex:1/3
  },
  containerBody: {
    justifyContent: "center",
    alignContent: "center",
    flex: 2,
    marginBottom: 20,
    marginTop: 100,
  },
  listActivities: {
    alignSelf: "center",
  },
  contenairActivity: {
    backgroundColor: "#FEFEFE",
    margin: 15,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    height: 130,
    width: 130,
    shadowColor: "#0E0D0D",
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textActivity: {
    fontSize: 20,
  },
});
export default AddActivityScreen;
