import { View, StyleSheet, Text, Pressable, ScrollView } from "react-native";
import { Image } from "react-native-elements";
import CostumedHeader from "../components/CostumedHeader";
import { Header } from "react-native-elements";
import CostumedXpProgressProfile from "../components/CostumedXpProgressProfile";
import { useContext } from 'react';
import { Context as SessionContext } from '../contexts/SessionContext';



// @ts-ignore
const ProfileScreen = ({navigation}) => {
  // @ts-ignore
  const {defineSession} = useContext(SessionContext);
  return (
    <View style={styles.contenair}>
      {/**Header */}
      <View style={styles.containerHeader}>
        <Header containerStyle={{ backgroundColor: "#F1F3F3" }} />
        <CostumedHeader text="" titlePage="My profile" />
      </View>

      {/**Body */}
      <View style={styles.containerBody}>
        {/**user info */}
        <View style={styles.contenairUserInfo}>
          <Image
            source={require("../../assets/img/avatar.jpg")}
            style={styles.userAvatar}
          />
          <View>
            <Text style={styles.userInfoText}>username </Text>
          </View>
        </View>

        {/**level & exprience */}
        <View style={styles.contenairLevelExperience}>
          <View style={styles.backLevelExperience}>
            <Text style={styles.textLevelExperience}>Level 1 </Text>
          </View>
          <View style={styles.backLevelExperience}>
            <Text style={styles.textLevelExperience}>60 points</Text>
          </View>
        </View>
        <View>
          <CostumedXpProgressProfile />
        </View>

        <View style={{ marginTop: 50 }}>
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed
                  ? "rgba(255, 185, 138,0.5)"
                  : "#FE9801",
              },
              styles.btnLogOut,
            ]}
            onPress={()=>{
              defineSession(null);
              console.log("Je suis deconnecté");
              navigation.navigate('Welcome');
            }
            }
          >
            <Text style={styles.textBtnLogOut}>Log out</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenair: {
    flex: 1,
    backgroundColor: "#F1F3F3",
  },
  containerHeader: {
    flex: 0.2,
  },
  containerBody: {
    alignContent: "center",
    backgroundColor: "#FEFEFE",
    justifyContent: "center",
    margin: 15,
    borderRadius: 25,
    shadowColor: "#0E0D0D",
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    maxHeight: 550,
    flex: 0.7,
  },
  contenairUserInfo: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  userAvatar: {
    width: 80,
    height: 80,
    marginTop: 30,
    overflow: "scroll",
    borderRadius: 80 / 2,
  },

  userInfoText: {
    color: "#0f4e67",
    fontSize: 20,
    margin: 8,
  },

  contenairLevelExperience: {
    justifyContent: "space-around",
    flexDirection: "row",
  },
  backLevelExperience: {
    width: 130,
    height: 50,
    backgroundColor: "#6E9CAE",
    margin: 20,
    borderRadius: 25,
    shadowColor: "#0E0D0D",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  textLevelExperience: {
    color: "white",
    fontSize: 18,
  },
  btnLogOut: {
    width: 150,
    height: 50,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 25,
    //backgroundColor : '#FE9801',
  },
  textBtnLogOut: {
    color: "#010101",
    fontSize: 18,
  },
});

export default ProfileScreen;
