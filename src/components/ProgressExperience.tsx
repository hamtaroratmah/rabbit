import { LinearProgress } from "react-native-elements";
import { StyleSheet } from "react-native";

const ProgressExperience = () => {
  return (
    <LinearProgress
      value={0.2}
      color="#0E0D0D"
      trackColor="#F59801"
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
  },
});

export default ProgressExperience;
