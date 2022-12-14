import { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import CostumedOrangeButton from "../components/CostumedOrangeButton";
import CostumedHeader from "../components/CostumedHeader";
import CostumedTextInputActivity from "../components/CostumedTextInputActivity";
import Calendar from "../components/Calendar";
import RadioBoxPrivatePublic from "../components/RadioBoxPrivatePublic";
import { Header } from "react-native-elements";

const FormCreateChallenge = ({ navigation }) => {
  const [objectif, setObjectif] = useState("");
  const [desciptipn, setDescription] = useState("");

  return (
    <View style={styles.container}>
      {/** Header */}
      <Header containerStyle={{ backgroundColor: "#F1F3F3" }} />
      <CostumedHeader
        text="Set your objectif and describe it"
        titlePage="Activité choisi (souli)"
      />

      {/** body**/}
      <ScrollView style={styles.containerBody}>
        <Text style={styles.textStyle}>Your goal : </Text>

        <View style={styles.containerInputGoal}>
          <CostumedTextInputActivity
            placeHolderText="example : 10"
            value={objectif}
            setValue={setObjectif}
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

        <Calendar />
        <RadioBoxPrivatePublic />
        <CostumedOrangeButton text="Create challenge" action={() => {}} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F3F3",
    //justifyContent: "space-around",
  },
  containerBody: {
    flex: 1.5,
    margin: 15,
    backgroundColor: "#FEFEFE",
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
  containerBtn: {
    flex: 1 / 2,
  },
});
export default FormCreateChallenge;
