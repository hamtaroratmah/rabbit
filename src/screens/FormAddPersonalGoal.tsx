import { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import CostumedOrangeButton from "../components/CostumedOrangeButton";
import CostumedHeader from "../components/CostumedHeader";
import CostumedTextInputActivity from "../components/CostumedTextInputActivity";
import CostumedButton from "../components/CostumedButton";
import { Header } from "react-native-elements";


const FormAddPersonalGoal = ({ navigation }) => {
  const [goal, setGoal] = useState("");
  const [desciptipn, setDescription] = useState("");
  return (
    <View style={styles.container}>
            <Header containerStyle={{ backgroundColor: "#F1F3F3" }} />

      {/** Header */}
      <View style={styles.containerHeader}>
        <CostumedHeader
          text="Set your objectif and describe it"
          titlePage="Activité choisi (souli)"
        />
      </View>

      {/** body**/}
      <ScrollView style={styles.containerBody}>
        <Text style={styles.textStyle}>Your goal : </Text>

        <View style={styles.containerInputGoal}>
          <CostumedTextInputActivity
            placeHolderText="example : 10"
            value={goal}
            setValue={setGoal}
            type="numeric"
            isMultiline={false}
            maxLength={4}
            stylesProps={styles.textInputGaol}
          />
          <Text> unité/ unité </Text>
        </View>

        <Text style={styles.textStyle}> Description : </Text>

        <CostumedTextInputActivity
          placeHolderText="maximum 100 letters"
          value={desciptipn}
          setValue={setDescription}
          type="default"
          isMultiline={true}
          maxLength={100}
          stylesProps={styles.textInputDescription}
        />

        <View>
          <Text> Graphe: </Text>
        </View>
        <View style={{ alignSelf: "flex-end" }}>
          <CostumedButton text="Save" action={() => {}} />
        </View>
      </ScrollView>
      {/**Btn challengens */}
      <View style={styles.containerBtnChallenges}>
        <CostumedOrangeButton text="Challengens" action={() => {}} />
      </View>
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
    flex: 1,
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
  },
  containerHeader: {
    flex: 1 / 3,
  },
  textStyle: {
    fontSize: 16,
    margin: 10,
  },
  containerInputGoal: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 10,
    marginBottom: 15,
  },
  textInputGaol: {
    width: 200,
  },
  textInputDescription: {
    height: 150,
    alignSelf: "stretch",
    margin: 10,
    alignItems: "stretch",
  },
  containerBtnChallenges: {
    flex: 1 / 2,
  },
});
export default FormAddPersonalGoal;
