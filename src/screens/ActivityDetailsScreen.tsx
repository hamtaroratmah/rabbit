import { Text, View, StyleSheet, ScrollView, Pressable } from "react-native";
import CostumedHeader from "../components/CostumedHeader";
import { Header } from "react-native-elements";
import { useState } from "react";
import SimpleProgressChart from "../components/CircularGraph";
import CostumedTextInputActivity from "./../components/CostumedTextInputActivity";


const ActivityDetailsScreen = ({ navigation }) => {
  const [goal, setGoal] = useState("");
  return (
    <View style={styles.container}>
      <Header containerStyle={{ backgroundColor: "#F1F3F3" }} />

      {/** Header */}
      <View>
        <CostumedHeader
          titlePage="mettre activite choisi (SOULI) "
          text="Keep moving forward "
        />
      </View>

      {/** body**/}
      <ScrollView style={styles.containerBody}>
        {/** Description */}
        <View style={styles.contenairDescription}>
          <View style={styles.boxDescription}>
            <Text style={styles.textDescription}>Description</Text>
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
              <Text> unité/ unité </Text>
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
            onPress={() => {}}
          >
            <Text style={styles.textBtnSave}>Save</Text>
          </Pressable>
      </ScrollView>
    </View>
  );
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
