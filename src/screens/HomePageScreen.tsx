import React, { useState } from "react";
import {
  Pressable,
  Modal,
  View,
  StyleSheet,
  Text,
  Image,
  Alert,
} from "react-native";
import Separator from "../components/CostumedLine";
import ProgressExperience from "../components/ProgressExperience";
import PopUpInfo from "../components/PopUpInfo";
import ComponentIcons from "../components/ComponentIcons";

const HomePageScreen = ({ navigation }) => {
  const textFirstPopUp: string = ` Welcome to us, we're glad you're joining us and becoming a productive rabbit who is ready to learn new habits.
  Before we start let's find out how the application works`;

  const textSecondPopUp: string = `To begin, start by adding a new activity`;

  const [isFistPopUpVisible, setIsFistPopUpVisible] = useState(true);
  const [isSecondPopUpVisible, setIsSecondPopUpVisible] = useState(false);
  const action = () => {
    setIsFistPopUpVisible(false);
    setIsSecondPopUpVisible(true);
    console.log("hy")
  };

  const incrementNbClick = () => {};

  return (
    <View style={styles.container}>
      {/*********************************************** */}
      <View style={{ flex: 1 / 3 }}>
        <View style={{ flex: 1 }}>
          <Text style={{ flex: 1 }}> Welcome Pseudo</Text>
          <View style={{ flex: 2 }}>
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                justifyContent: "flex-start",
              }}
            >
              <Image
                source={require("./../../assets/icons/diamant.png")}
                style={[styles.icon]}
              />

              {/********* A refaire par sou */}
              <ProgressExperience />
              {/********* A refaire par sou */}
            </View>
          </View>

          <View style={{ flex: 1, marginTop: 10 }}>
            <Text> Level 0</Text>
          </View>

          {/*Pour le diamant qd on atteint un certain niveau le diamant change*/}
        </View>
      </View>
      {/*********************************************** */}

      {/**Pop up with information */}
      <View style={styles.containerBody}>
        <PopUpInfo
          textModal={textFirstPopUp}
          textBtn="Next"
          isVisible={isFistPopUpVisible}
          action={() => action()}
        />
        <PopUpInfo
          textModal={textSecondPopUp}
          textBtn="hy"
          isVisible={isSecondPopUpVisible}
          action={() => action()}
        />
      </View>

      <Separator />
      {/**Component with different icons*/}
      <ComponentIcons />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E7ECFA",
  },
  containerHeader: {},
  containerBody: {
    flex: 2,
  },
  icon: {
    height: 50,
    width: 50,
  },
});

export default HomePageScreen;
