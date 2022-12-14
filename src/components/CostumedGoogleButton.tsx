import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {AuthController} from "../controllers/AuthController";

const ButtonLoginGoogle = () => {

  const controller = new AuthController();

  const login = async ()=>{
    await controller.loginWithGoogle();
    console.log("Auth with Google succeed");
  }

  return (
    <View style={styles.container}>
      <FontAwesome.Button
        name="google"
        color="#FFFBFB"
        backgroundColor="#207B9F"
        onPress={login}
      >
        <Text style={styles.text}> Connect with Google</Text>
      </FontAwesome.Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    marginBottom: 30,
    marginTop: 10,
    width: 200,
    height: 60,
    alignContent: "center",
  },

  text: {
    fontSize: 16,
    color: "#FFFBFB",
  },
});

export default ButtonLoginGoogle;
