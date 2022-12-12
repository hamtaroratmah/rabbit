import { LinearProgress } from "react-native-elements";
import { StyleSheet } from "react-native";

const ProgressExperience = () => {
  return (
    <LinearProgress
      value={0.2}
      color="#F1F3F3"
      style={styles.progress}
      variant="indeterminate"
    />
  );
};

const styles = StyleSheet.create({
  progress: {
    alignSelf: "center",
    padding: 5,
    width: 300,
    borderRadius: 10,
    borderColor: "#0F4E67",
    borderWidth: 0.6,
    opacity: 1,
  },
});

export default ProgressExperience;
