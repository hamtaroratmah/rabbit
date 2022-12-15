
import { Image, StyleSheet, Text, View } from "react-native";
import CostumedButton from "../components/CostumedButton";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image
          source={require("./../../assets/img/logo.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.contenairText}>
        <View>
          <Text style={styles.caption}>
            We are what we repeatedly do. Excellence, then, is not an act, but a
            habbit.
          </Text>
        </View>

        <View>
          <CostumedButton
            text="Sign in"
            action={() => navigation.navigate("SignIn")}
          />
        </View>
        <View>
          <CostumedButton
            text="Sign up"
            action={() => navigation.navigate("SignUp")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFBFB",
    alignItems: "center",
    //justifyContent: "center",
  },

  containerLogo: {
    flex: 1.5,
    justifyContent: "center",
  },

  logo: {
    margin: 0,
    width: 250,
    height: 250,
    overflow: "visible",
  },
  contenairText: {
    flex: 1.5,
  },
  caption: {
    fontSize: 20,
    marginBottom: 15,
    justifyContent: "center",
    textAlign: "center",
    color: "#142b6f",
    margin: 20,
  },
});
export default WelcomeScreen;
