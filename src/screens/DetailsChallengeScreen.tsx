import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import CostumedHeader from "../components/CostumedHeader";
import { Header } from "react-native-elements";
import { useState, useContext, useEffect } from "react";
import CircularGraph from "./../components/CircularGraph";
import { ChallengesController } from "./../controllers/ChallengesController";
import { Context as UserSessionContext } from "../contexts/SessionContext";

//@ts-ignore
const DetailsChallengeScreen = ({ route }) => {
  const { id_challenge } = route.params;

  const [nbOfYes, setNbOfYes] = useState(0);
  const [nbOfNo, setNbOfNo] = useState(0);
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  const challengesController = new ChallengesController();
  // @ts-ignore
  const value = useContext(UserSessionContext);

  const [challenge, setChallenge] = useState([]);

  const getChallenge = async () => {
    //@ts-ignore
    const userId = value.session.user.id;
    const data = await challengesController.getMyChallenge(
      id_challenge,
      userId
    );
    //@ts-ignore
    console.log(data[0].challenges);

    //@ts-ignore
    setChallenge(data[0].challenges);

    const stats = await challengesController.getStats(id_challenge, userId);
    console.log(stats);

    //setNbOfYes(mettre nb yes);
    //setNbOfNo(mettre nb no);
  };

  useEffect(() => {
    getChallenge();
  }, []);

  let currentDate = new Date();
  let midnightOfCurrentDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDay(),
    23,
    59,
    59,
    59
  );

  /**
   * the buttons (yes/no) are deactivated the same day it was clicked and it becomes clickable the day after
   */
  const onBtnClicked = () => {
    if (currentDate < midnightOfCurrentDate) {
      setIsBtnDisabled(false);
    } else {
      setIsBtnDisabled(true);
    }
  };

  const actionBtnYes = async () => {
    //@ts-ignore
    const userId = value.session.user.id;
    const data = await challengesController.updateYES(
      id_challenge,
      userId,
      nbOfYes + 1
    );
    //@ts-ignore
    setChallenge(data);
    setNbOfYes(nbOfYes + 1);
  };

  const actionBtnNo = async () => {
    //@ts-ignore
    const userId = value.session.user.id;
    const data = await challengesController.updateNo(
      id_challenge,
      userId,
      nbOfNo + 1
    );
    //@ts-ignore
    setChallenge(data);
    setNbOfNo(nbOfNo + 1);
  };

  return (
    <View style={styles.container}>
      <Header containerStyle={{ backgroundColor: "#F1F3F3" }} />

      {/** Header */}
      <View>
        <CostumedHeader titlePage="Details challenge " text={challenge.title} />
      </View>

      {/** body**/}
      <ScrollView style={styles.containerBody}>
        {/**Goal */}
        <View style={styles.contenairGoal}>
          <Text style={styles.textStyleTitle}>Your goal : </Text>
          <Text style={styles.textStyle}>{challenge.objective}</Text>
          <Text style={styles.textStyle}> unité/ unité </Text>
        </View>

        {/** Description */}
        <View style={styles.contenairDescription}>
          <Text style={styles.textStyleTitle}> Description : </Text>
          <ScrollView style={styles.boxDescription}>
            <Text style={styles.textDescription}>{challenge.description}</Text>
          </ScrollView>
        </View>

        {/**Btn successed */}
        <View style={styles.contenairBtnSuccessed}>
          <Text style={styles.textStyleTitle}>Successed ?</Text>

          {/**btn Yes */}
          <Pressable
            onPressIn={onBtnClicked}
            disabled={isBtnDisabled}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "rgba(94, 196, 190,0.4)" : "#5ec4be",
              },
              styles.button,
            ]}
            onPress={actionBtnYes}
          >
            <Text style={styles.textBtn}>yes</Text>
          </Pressable>

          {/**btn No */}
          <Pressable
            onPressIn={onBtnClicked}
            disabled={isBtnDisabled}
            style={({ pressed }) => [
              {
                backgroundColor: pressed
                  ? "rgba(255, 136, 136,0.4)"
                  : "#ff8888",
              },

              styles.button,
            ]}
            onPress={actionBtnNo}
          >
            <Text style={styles.textBtn}>No</Text>
          </Pressable>
        </View>

        {/**Successed rate */}
        <View style={styles.contenairSuccessedRate}>
          <Text style={styles.textStyleTitle}>Successed rate :</Text>

          <CircularGraph nbOfYes={nbOfYes} nbOfNo={nbOfNo} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F3F3",
  },
  containerBody: {
    alignContent: "center",
    backgroundColor: "#FEFEFE",
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
  },
  textStyleTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  textStyle: {
    fontSize: 16,
  },
  contenairGoal: {
    flexDirection: "row",
    alignContent: "center",
    margin: 15,
  },
  contenairDescription: {
    alignContent: "center",
    margin: 15,
  },
  boxDescription: {
    backgroundColor: "#F1F4FA",
    padding: 15,
    borderRadius: 25,
    color: "gray",
    fontSize: 15,
    shadowColor: "#0E0D0D",
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 150,
    marginTop: 10,
  },
  textDescription: {
    fontSize: 17,
    padding: 10,
  },
  button: {
    width: 60,
    height: 60,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 30,
  },
  textBtn: {
    fontSize: 16,
  },
  contenairBtnSuccessed: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  contenairSuccessedRate: {
    alignContent: "center",
    margin: 15,
  },
});
export default DetailsChallengeScreen;
