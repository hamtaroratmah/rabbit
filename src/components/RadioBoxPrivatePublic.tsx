import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { CheckBox } from "react-native-elements";

const RadioBoxPrivatePublic = () => {
  const [isPrivate, setIsPrivate] = useState(false);
  const [isPublic, setIsPublic] = useState(false);

  const privateSelected = () => {
    global.private = isPrivate;
    setIsPrivate(true);
    setIsPublic(false);
  };

  const publicSelected = () => {
    global.private = isPrivate;
    setIsPrivate(false);
    setIsPublic(true);
  };
  return (
    <View style={styles.contenairCheckBox}>
      <CheckBox
        title="private"
        checked={isPrivate}
        checkedIcon="dot-circle-o"
        checkedColor="#0F4E67"
        unchekedIcon="circle-o"
        onPress={privateSelected}
        containerStyle={styles.checkBox}
      />
      <CheckBox
        title="public"
        center
        checked={isPublic}
        checkedIcon="dot-circle-o"
        checkedColor="#0F4E67"
        unchekedIcon="circle-o"
        onPress={publicSelected}
        containerStyle={styles.checkBox}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contenairCheckBox: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  checkBox: {
    backgroundColor: "#FEFEFE",
  },
});

export default RadioBoxPrivatePublic;
