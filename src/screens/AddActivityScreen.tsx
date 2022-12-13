import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Header } from "react-native-elements";
import CostumedOrangeButton from "../components/CostumedOrangeButton";
import CostumedHeader from "../components/CostumedHeader";
import { useState } from "react";

const AddActivityScreen = ({ navigation }) => {
  const activities = [
    {
      id: '1',
      name: "sport",
    },
    {
      id: '2',
      name: "Food",
    },
    {
      id: '3',
      name: "Drink",
    },
    {
      id: 4,
      name: "Sleep",
    },
    {
      id: 5,
      name: "Meditation",
    },
    {
      id: 6,
      name: "Work",
    },
  ];
  let nbOfColoumns = 2;


  
  return (
    <View style={styles.container}>
      {/** Header */}
      <View style={{ flex: 1 / 3 }}>
        <CostumedHeader
          text="Choose your activity and make a challenge"
          titlePage="Activities"
        />
      </View>

      {/** body => list of activities*/}
      <View style={styles.containerBody}>
        <FlatList
          contentContainerStyle={styles.listActivities}
          numColumns={nbOfColoumns}
          data={activities}
          keyExtractor={(item)=>item.id.toString()}
          renderItem={({ item }) => {
            return (
              <Pressable  onPress={() => {}} style={styles.contenairActivity}>
                <Text style={styles.textActivity}>{item.name}</Text>
              </Pressable >

            );
          }}
        />

        {/**Btn add */}
        <View>
          <CostumedOrangeButton text="Add" action={() => {}} />
        </View>
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
    justifyContent: "center",
    alignContent: "center",
    flex: 2,
    marginBottom: 20,
    marginTop: 40,
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
    height: 150,
    width: 150,
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
