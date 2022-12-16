import { Text, View, StyleSheet, ScrollView, Pressable } from "react-native";
import CostumedHeader from "../components/CostumedHeader";
import { Header } from "react-native-elements";
import { useState , useEffect ,useContext,useCallback} from "react";
import {Context as UserSessionContext} from '../contexts/SessionContext';
import CostumedTextInputActivity from "./../components/CostumedTextInputActivity";
import {ActivitiesController} from "./../controllers/ActivitiesController"
import CostumedOrangeButton from "./../components/CostumedOrangeButton"
//@ts-ignore

const ActivityDetailsScreen = ({ navigation,route }) => {
  const { id_activity } = route.params;

  const activitiesController = new ActivitiesController();

	// @ts-ignore
	const value = useContext(UserSessionContext);
	const [activity , setActivity] = useState([])
  

	const getActivity = async () => {
	  //@ts-ignore
	  const userId = value.session.user.id
	  const data = await activitiesController.getActivity(userId,id_activity)
    //@ts-ignore
	  console.log("acitivity",data[0]);
	  //@ts-ignore
	  setActivity(data[0])
	} 

  const getUserActivity = async () => {
	  //@ts-ignore
	  const userId = value.session.user.id
	  const data = await activitiesController.getUserActivity(userId,id_activity)
    //@ts-ignore
	  console.log("user acitivity",data[0]);
	  if(data[0].id_activity){
      setStarted(true)
    }
	  //@ts-ignore
	} 
  
  const startActivity = async () => {
	  //@ts-ignore
	  const userId = value.session.user.id
	  const data = await activitiesController.startActivity(userId,id_activity)
    //@ts-ignore
	  console.log("user acitivity",data[0]);
    //@ts-ignore
	} 

  const saveDailyUpdate = async () => {
	  //@ts-ignore
	  const userId = value.session.user.id
	  const data = await activitiesController.saveDailyUpdate(userId,id_activity,goal)
    //@ts-ignore
	  console.log("user acitivity",data[0]);
    //@ts-ignore
	} 

		
	useEffect(() => {
		getActivity();
    getUserActivity();
	}, [])

  
  const [goal, setGoal] = useState("");
  const [started , setStarted] = useState(false)

  if(started==true){
    return (
      <View style={styles.container}>
        <Header containerStyle={{ backgroundColor: "#F1F3F3" }} />
  
        {/** Header */}
        <View>
          <CostumedHeader
            titlePage={activity.title}
            text=""
          />
        </View>
  
        {/** body**/}
        <ScrollView style={styles.containerBody}>
          {/** Description */}
          <View style={styles.contenairDescription}>
            <View style={styles.boxDescription}>
              <Text style={styles.textDescription}>{activity.description}</Text>
            </View>
          </View>
          {/**Goal */}
      
            <Text style={styles.textTitleInput}>
              Marque your progress of the day:
            </Text>
          
          
           {/**Goal input */}
           <View style={styles.containerInputProgress}>
                <CostumedTextInputActivity
                  placeHolderText="example : 10"
                  value={goal}
                  setValue={setGoal}
                  type="numeric"
                  isMultiline={false}
                  maxLength={4}
                  stylesProps={styles.textInputProgress}
                />
                <Text> {activity.mesure} </Text>
              </View>
              <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed
                    ? "rgba(255, 185, 138,0.5)"
                    : "#FE9801",
                },
                styles.btnSave,
              ]}
              onPress={() => {
                saveDailyUpdate();
                setGoal(goal)
              }}
            >
              <Text style={styles.textBtnSave}>Save</Text>
            </Pressable>
            <View>
              <CostumedOrangeButton text='Create challenge' action={() =>{navigation.navigate('Home',{screen:"FormCreateChallenge" , params:{ id_activity : activity.id }})}} />
            </View>
        </ScrollView>
      </View>
    );
  }else{
    return (
      <View style={styles.container}>
        <Header containerStyle={{ backgroundColor: "#F1F3F3" }} />
  
        {/** Header */}
        <View>
          <CostumedHeader
            titlePage={activity.title}
            text=""
          />
        </View>
  
        {/** body**/}
        <ScrollView style={styles.containerBody}>
          {/** Description */}
          <View style={styles.contenairDescription}>
            <View style={styles.boxDescription}>
              <Text style={styles.textDescription}>{activity.description}</Text>
            </View>
          </View>
          {/**Goal */}
      
            <Text style={styles.textTitleInput}>
              You don't have any activity, you can start an activity
            </Text>
          
          
           {/**Goal input */}
           <View style={styles.containerInputProgress}>
              </View>
              <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed
                    ? "rgba(255, 185, 138,0.5)"
                    : "#FE9801",
                },
                styles.btnSave,
              ]}
              onPress={() => {
                startActivity()   
                setStarted(true)           
              }}
            >
              <Text style={styles.textBtnSave}>Start activity</Text>
            </Pressable>
            
        </ScrollView>
      </View>
    );
  }
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F3F3",
  },
  containerBody: {
    alignContent: "center",
    backgroundColor: "#FEFEFE",
    margin: 15,
    borderRadius: 25,
    shadowColor: "#0E0D0D",
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    maxHeight: 550,
  },
  textTitleInput: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop:10
  },
 
  contenairDescription: {
    alignContent: "center",
    margin: 15,
  },
  boxDescription: {
    backgroundColor: "#B4D2DE",
    padding: 15,
    borderRadius: 25,
    color: "gray",
    fontSize: 15,
    shadowColor: "#0E0D0D",
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 150,
    marginTop: 10,
    justifyContent:"center"
  },
  textDescription: {
    fontSize: 17,
    padding: 10,
  },
  containerInputProgress: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 15,
  },
  textInputProgress: {
    width: 200,
    marginRight:10,
    marginTop:10
  },
  btnSave: {
    width: 150,
    height: 50,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 25,
    //backgroundColor : '#FE9801',
  },
  textBtnSave: {
    color: "#010101",
    fontSize: 18,
  }

});
export default ActivityDetailsScreen;
