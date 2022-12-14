import { useState} from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import CostumedButton from "../components/CostumedButton";
import CostumedTextInput from "../components/CostumedTextInput";
import Separator from "../components/CostumedLine";
import ButtonLoginGoogle from "../components/CostumedGoogleButton";
import {AuthController} from "../controllers/AuthController";

// @ts-ignore
const SignUpScreen = ({ navigation }) => {
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const controller = new AuthController();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "position" : "height"}
      style={styles.container}
    >
      <View>
        <Image
          source={require("./../../assets/img/logo.png")}
          style={styles.logo}
        />
      </View>
      <View>
        <Text style={styles.caption}>Create new account</Text>
      </View>
      <View style={styles.center}>
        <CostumedTextInput
          placeHolderText="Pseudo"
          value={pseudo}
          setValue={setPseudo}
          secureTextEntry={false}
        />
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
        <CostumedTextInput
          placeHolderText="Confirm password"
          value={confirmationPassword}
          setValue={setConfirmationPassword}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.center}>
        <CostumedButton
          text="Create"
          action={async () => await controller.register(pseudo, email, password, confirmationPassword) ? navigation.navigate("TabNavigator") : console.log("Error SignUp") }
        />
      </View>
      <View>
        <Text style={styles.textQuestion}>Already have an account ?</Text>
        <Text onPress={() => navigation.navigate("SignIn")} style={styles.href}>
          Log in to your account
        </Text>
      </View>

      <Separator/>
      <ButtonLoginGoogle />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFBFB",
    justifyContent: "center",
  },
  caption: {
    fontSize: 18,
    justifyContent: "center",
    textAlign: "center",
    color: "#142b6f",
    alignSelf: "center",
  },
  logo: {
    width: 150,
    height: 150,
    overflow: "visible",
    alignSelf: "center",
  },
  center: {
    alignSelf: "center",
  },
  textQuestion: {
    fontSize: 15,
    justifyContent: "center",
    textAlign: "center",
    color: "#0E0D0D",
    fontStyle: "italic",
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
export default SignUpScreen;
