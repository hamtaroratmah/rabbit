import { Text, View, StyleSheet, ScrollView } from "react-native";
import CostumedHeader from "../components/CostumedHeader";
import { Header } from "react-native-elements";

const DetailsActivityScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Header containerStyle={{ backgroundColor: "#F1F3F3" }} />

      {/** Header */}
      <View style={styles.containerHeader}>
        <CostumedHeader
          titlePage="Details activity "
          text="Focus on your goal and don't give up "
        />
      </View>

      {/** body**/}
      <View style={styles.containerBody}>
        {/**Goal */}
        <View style={styles.contenairGoal}>
          <Text style={styles.textStyleTitle}>Your goal : </Text>
          <Text style={styles.textStyle}>goal</Text>
          <Text style={styles.textStyle}> unité/ unité </Text>
        </View>
        
        {/**Description */}
        <View style={styles.contenairDescription}>
          <Text style={styles.textStyleTitle}> Description : </Text>
          <ScrollView style={styles.boxDescription}>
            <Text style={styles.textDescription}>
              Description
            </Text>
  
          </ScrollView>
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
    alignContent: "center",
    flex: 1 / 1.5,
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
    marginBottom: 20,
  },
  textStyleTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  textStyle: {
    fontSize: 16,
  },
  contenairGoal: {
    flexDirection: "row",
    alignContent: "center",
    margin: 15,
  },
  contenairDescription: {
    alignContent: "center",
    margin: 15,
  },
  boxDescription: {
    backgroundColor: "#F1F4FA",
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
    height: 200,
    marginTop: 10,
  },
  textDescription: {
    fontSize: 17,
    padding: 10,
  },
  
});
export default DetailsActivityScreen;
