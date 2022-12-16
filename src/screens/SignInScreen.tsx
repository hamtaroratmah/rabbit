import {
  Image,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

import CostumedButton from "../components/CostumedButton";
import CostumedTextInput from "../components/CostumedTextInput";
import Separator from "../components/CostumedLine";
import ButtonLoginGoogle from "../components/CostumedGoogleButton";
import { AuthController } from "../controllers/AuthController";
import { useContext, useState } from "react";
import { Context as UserIdContext } from "../contexts/SessionContext";
import { err } from "react-native-svg/lib/typescript/xml";

// @ts-ignore
const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [text, setText] = useState("");

  const checkInput = (email: string, password: string, error:any) => {
    if (email == "" || password == "") {
		setText("Please fill in all fields");
	  throw error.message
  };}

  // @ts-ignore
  // const {idUser, defineIdUser} = useContext(UserIdContext);
  const controller = new AuthController();
  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={[{ flex: 1 }, styles.container]}
      enabled
    >
      <ScrollView>
        <View style={styles.contenairLogo}>
          <Image
            source={require("./../../assets/img/logo.png")}
            style={styles.logo}
          />
        </View>
        <View style={styles.contenairBody}>
          <View>
            <Text style={styles.caption}>Log in to your account</Text>
            <Text
              style={styles.messageError}
            >
              {text}
            </Text>
          </View>
          <View>
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
              action={async () => {
                const { error } = await controller.login(email, password);
				checkInput(email, password, error);
                if (error) {
					setText("Incorrect password or email")
					throw error.message	
				}else{
					navigation.navigate("TabNavigator", {
						screen: "Home",
						params: { screen: "HomePageUser" },
					  });
				}
                
              }}
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
          <ButtonLoginGoogle />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFBFB",
  },
  contenairLogo: {
    flex: 1 / 2,
    justifyContent: "center",
  },
  contenairBody: {
    flex: 1 / 2,
    justifyContent: "center",
    marginTop: 50,
  },
  logo: {
    marginTop: 40,
    width: 200,
    height: 200,
    overflow: "visible",
    alignSelf: "center",
  },

  caption: {
    fontSize: 19,
    marginBottom: 5,
    justifyContent: "center",
    textAlign: "center",
    color: "#142b6f",
    alignSelf: "center",
  },
  messageError: {
    color: "red",
    fontSize: 15,
    margin: 15,
    alignSelf: "center",
    fontStyle: "italic",
  },

  button: {
    alignSelf: "center",
  },

  textQuestion: {
    fontSize: 15,
    justifyContent: "center",
    textAlign: "center",
    color: "black",
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
export default SignInScreen;
