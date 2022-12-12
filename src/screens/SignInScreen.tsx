import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import CostumedButton from "../components/CostumedButton";
import CostumedTextInput from "../components/CostumedTextInput";
import Separator from "../components/CostumedLine";
import ButtonLoginGoogle from "../components/CostumedGoogleButton";

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <View style={styles.container}>
      <View style={styles.contenairLogo}>
        <Image
          source={require("./../../assets/img/logo.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.contenairBody}>
        <View>
          <Text style={styles.caption}>Log in to your account</Text>
        </View>
        <View style={styles.button}>
          <CostumedTextInput
            placeHolderText="Email"
            value={email}
            setValue={setEmail}
            secureTextEntry={false}
          />
          <CostumedTextInput
            placeHolderText="Password"
            value={password}
            setValue={setPassword}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.button}>
          <CostumedButton
            text="Log in"
            action={() => navigation.navigate("Welcome")}
          />
        </View>

        <View>
          <Text style={styles.textQuestion}>Want to join us ?</Text>
          <Text
            onPress={() => navigation.navigate("SignUp")}
            style={styles.href}
          >
            Create new account
          </Text>
        </View>
        <View>
          <Separator />
        </View>
        <ButtonLoginGoogle text="Connect with Google" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    justifyContent: "center",
    padding: 15,
    backgroundColor: "#FFFBFB",
  },
  contenairLogo: {
    flex: 0.5,
    justifyContent: "center",
  },
  logo: {
    marginTop: 45,
    width: 250,
    height: 20,
    overflow: "visible",
    alignSelf: "center",
  },
  contenairBody: {
    flex: 1,
    justifyContent: "center",
  },
  caption: {
    fontSize: 19,
    marginBottom: 5,
    justifyContent: "center",
    textAlign: "center",
    color: "#142b6f",
    alignSelf: "center",
  },

  button: {
    alignSelf: "center",
  },

  textQuestion: {
    fontSize: 15,
    justifyContent: "center",
    textAlign: "center",
    color: "black",
    fontStyle: "oblique",
  },
  href: {
    fontSize: 15,
    margin: 10,
    justifyContent: "center",
    textAlign: "center",
    color: "#142b6f",
    alignSelf: "center",
    textDecorationLine: "underline",
  },
});
export default SignInScreen;
