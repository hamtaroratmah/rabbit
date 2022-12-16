import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import CostumedButton from "../components/CostumedButton";
import CostumedTextInput from "../components/CostumedTextInput";
import Separator from "../components/CostumedLine";
import ButtonLoginGoogle from "../components/CostumedGoogleButton";
import { AuthController } from "../controllers/AuthController";

// @ts-ignore
const SignUpScreen = ({ navigation }) => {
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [text, setText] = useState("");

  const checkInput = (
    email: string,
    password: string,
    pseudo: string,
    confirmationPassword: string, error:any
  ) => {
    if (
      email == "" ||
      password == "" ||
      pseudo == "" ||
      confirmationPassword == ""
    ) {
      setText("Please fill in all fields");
	  throw error.message
    } else if(!email.match(/[a-z0-9_\-\.]+@[a-z0-9_\-\.]+\.[a-z]+/i)){
		setText("Email format invalid")
		throw error.message
	}
	else if (password != confirmationPassword) {
      setText("The two passwords are not identical ");
	  throw error.message
    } else if(password.length<6){
		setText("he password must have at least 6 characters");
		throw error.message
	}
  };

  // @ts-ignore
  const controller = new AuthController();
  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={[{ flex: 1 }, styles.container]}
      enabled
    >
      <ScrollView>
        <View>
          <Image
            source={require("./../../assets/img/logo.png")}
            style={styles.logo}
          />
        </View>
        <View>
          <Text style={styles.caption}>Create new account</Text>
		  <Text style={styles.messageError}>{text}</Text>
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
            action={async () => {
              const { error } = await controller.register(
                pseudo,
                email,
                password,
                confirmationPassword
              );
			  checkInput(email, password, pseudo, confirmationPassword, error);
			  if (error) {
				setText("username or email already existing")
				throw error.message	 
			}else{
				navigation.navigate("TabNavigator", {
					screen: "Home",
					params: { screen: "HomePageNewUser" },
				  });
			}


            }}
          />
        </View>
        <View>
          <Text style={styles.textQuestion}>Already have an account ?</Text>
          <Text
            onPress={() => navigation.navigate("SignIn")}
            style={styles.href}
          >
            Log in to your account
          </Text>
        </View>

        <Separator />
        <ButtonLoginGoogle />
      </ScrollView>
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
    marginTop: 40,
  },
   messageError: {
    color: "red",
    fontSize: 15,
    margin: 15,
    alignSelf: "center",
    fontStyle: "italic",
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
