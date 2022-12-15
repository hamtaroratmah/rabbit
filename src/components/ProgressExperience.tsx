import { LinearProgress } from "react-native-elements";
import { StyleSheet, View } from "react-native";

const ProgressExperience = () => {
  return (
   
      <View style={styles.progress}>
        <View style={styles.progress2}></View>
      </View>
  
  );
};

const styles = StyleSheet.create({
  progress: {
    padding: 5,
    width: 300,
    borderRadius: 10,
    borderColor: "#0F4E67",
    borderWidth: 0.5,
    height: 10,
  },
  progress2: {
    padding: 5,
    width: 300,
    borderRadius: 10,
    opacity: 1,
    backgroundColor: "rgba(254,152,1,0.5)",
    transform: [{ scaleX: 0.5 }],
    position:"absolute",
    alignSelf: "flex-start",
    marginRight: 50,
  },
});

export default ProgressExperience;
