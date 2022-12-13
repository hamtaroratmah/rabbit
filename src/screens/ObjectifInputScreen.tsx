import { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import CostumedOrangeButton from "../components/CostumedOrangeButton";
import CostumedHeader from "../components/CostumedHeader";
import CostumedTextInputActivity from "../components/CostumedTextInputActivity";

const ObjectifInputScreen = ({ navigation }) => {
  const [objectif, setObjectif] = useState("");
  const [desciptipn, setDescription] = useState("");
  return (
    <View style={styles.container}>
      {/** Header */}
      <View style={styles.containerHeader}>
        <CostumedHeader
          text="Set your objectif and describe it"
          titlePage="Activité choisi (souli)"
        />
      </View>

      {/** body**/}
      <ScrollView style={styles.containerBody}>
        <Text style={styles.textStyle}>Your objectif : </Text>

        <View style={styles.containerInputObjectif}>
            <CostumedTextInputActivity
              placeHolderText="example : 10"
              value={objectif}
              setValue={setObjectif}
              type="numeric"
              isMultiline={false}
              maxLength={4}
              stylesProps={styles.textInputObjectif}
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
       
      </ScrollView>
      {/**Btn challengens */}
      <View style={styles.containerBtn}>
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
  containerInputObjectif: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 10,
    marginBottom: 15,
  },
  textInputObjectif: {
    width: 200,
  },
  textInputDescription: {
    height: 150,
    alignSelf: "stretch",
    margin: 10,
    alignItems: "stretch",
  },
  containerBtn:{
    flex: 1 / 2,
  }
});
export default ObjectifInputScreen;
