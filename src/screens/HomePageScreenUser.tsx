import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import { Header } from "react-native-elements";
import CostumedHeaderDiamond from "../components/CostumedHeaderDiamond";
import ComponentListHorizontalHabits from "../components/ComponentListHorizontalHabits";
import ComponentListHorizontalChallengens from "../components/ComponentListHorizontalChallengens";
import { useContext, useState, useEffect } from "react";
import { Context as UserSessionContext } from "../contexts/SessionContext";
import { ActivitiesController } from "../controllers/ActivitiesController";
import { ChallengesController } from "../controllers/ChallengesController";
import ComponentEmptyFlatList from "./../components/ComponentEmptyFlatList";

// @ts-ignore
const HomePageScreenUser = ({ navigation }) => {
  const activitiesController = new ActivitiesController();
  const challengesController = new ChallengesController();
  // @ts-ignore
  const value = useContext(UserSessionContext);
  const [activities, setActivities] = useState([]);
  const [challenges, setChallenges] = useState([]);

  const getActivities = async () => {
    //@ts-ignore
    const userId = value.session.user.id;
    const data = await activitiesController.getMyActivities(userId);
    console.log(data);

    //@ts-ignore
    setActivities(data);
  };

  const getChallenges = async () => {
    //@ts-ignore
    const userId = value.session.user.id;
    const data = await challengesController.getMyChallenges(userId);
    //@ts-ignore
    console.log("challenges", data);

    setChallenges(data);
  };

  useEffect(() => {
    getActivities();
    getChallenges();
  }, []);

  return (
    <View style={styles.container}>
      {/********************* header************************** */}
      <Header containerStyle={{ backgroundColor: "#F1F3F3" }} />
      <CostumedHeaderDiamond />

      {/*********************************************** */}

      {/**Motivation Paragraphe */}
      <View style={styles.containerBody}>
        <View style={styles.contenairMotivation}>
          <Text style={styles.textMotivation}>
            I am not a product of my circumstances. I am a product of my
            decisions.
          </Text>
          <Text style={styles.textAuthor}>Stephen Corvey</Text>
        </View>
        <View style={styles.contenairScrollHorizental}>
          <View>
            <FlatList
              ListEmptyComponent={
                <ComponentEmptyFlatList
                  textEmpty="You have 0 habit until now"
                  textCreate="You can create a habit by "
                  textAction="adding an activity"
                  action={() =>
                    navigation.navigate("TabNavigator", {
                      screen: "Home",
                      params: { screen: "AddActivity" },
                    })
                  }
                />
              }
              horizontal
              pagingEnabled={true}
              contentContainerStyle={[{ flexDirection: "row" }]}
              data={activities}
              renderItem={({ item }) => {
                return (
                  <View style={[styles.habittt]}>
                    {/**addichage de detail d'une habitude/challenge */}
                    <Pressable
                      onPress={() => {
                        navigation.navigate("Home", {
                          screen: "ActivityDetailsScreen",
                          params: { id_activity: item.activities.id },
                        });
                        console.log("navigate");
                      }}
                    >
                      <Text style={styles.textTitleItem}>
                        {item.activities.title}
                      </Text>
                      <Text style={styles.textTitleItem}>
                        {item.activities.description}
                      </Text>
                    </Pressable>
                  </View>
                );
              }}
            />
          </View>
          <Text style={{ alignSelf: "center", fontSize: 17, color:"gray" }}>
            My habits
          </Text>
        </View>

        <View style={styles.contenairScrollHorizental}>
          <View>
            <FlatList
			ListEmptyComponent={<ComponentEmptyFlatList
				textEmpty="You have 0 challenge until now"
				textCreate="You can "
				textAction="create a challenge"
				action={
					()=>navigation.navigate('TabNavigator', { screen: "Home" , params: {screen: 'AddActivity',},})


				}
				
				/>}
              horizontal
              pagingEnabled={true}
              contentContainerStyle={[{ flexDirection: "row" }]}
              data={challenges}
              renderItem={({ item }) => {
                return (
                  <View style={[styles.habitt]}>
                    {/**addichage de detail d'une habitude/challenge */}
                    <Pressable
                      onPress={() => {
                        navigation.navigate("Home", {
                          screen: "DetailsChallengeScreen",
                          params: { id_challenge: item.challenges.id },
                        });
                        console.log("navigate");
                      }}
                    >
                      <Text style={styles.textTitleItem}>
                        {item.challenges.title}
                      </Text>
                      <Text style={styles.textTitleItem}>
                        {item.challenges.description}
                      </Text>
                    </Pressable>
                  </View>
                );
              }}
            />
          </View>
          <Text style={{ alignSelf: "center", fontSize: 17, color:"gray" }}>
            My challenges
          </Text>
        </View>
      </View>

      {/**Component with different icons*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F3F3",
    justifyContent: "space-between",
  },
  containerBody: {
    flex: 2,
  },
  contenairMotivation: {
    backgroundColor: "#FEFEFE",
    margin: 15,
    padding: 10,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    height: 150,
    flex: 1 / 3,
    shadowColor: "#0E0D0D",
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textMotivation: {
    fontSize: 16,
    marginBottom: 20,
  },
  textAuthor: {
    alignSelf: "flex-end",
    paddingRight: 30,
    fontStyle: "italic",
    fontSize: 15,
  },

  habit: {
    backgroundColor: "#A1CDDE",
    margin: 15,
    borderRadius: 25,
    justifyContent: "center",
    alignContent: "space-between",
    height: 130,
    width: 220,
  },
  b: {
    backgroundColor: "E88006",
  },
  textActivity: {
    fontSize: 20,
  },
  listActivities: {
    alignSelf: "center",
  },
  contenairScrollHorizental: {
    backgroundColor: "#FEFEFE",
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
    shadowColor: "#0E0D0D",
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    flex: 1 / 4,
  },
  habitt: {
    backgroundColor: "#A1CDDE",
    margin: 15,
    padding: 5,
    borderRadius: 25,
    justifyContent: "center",
    alignContent: "space-between",
    height: 100,
    width: 220,
    shadowColor: "#0E0D0D",
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textTitleItem: {
    fontSize: 15,
    color: "white",
  },
  textMoreDetails: {
    alignSelf: "flex-end",
    padding: 10,
    fontSize: 16,
    fontStyle: "italic",
  },
  habittt: {
    backgroundColor: "#E0A156",
    margin: 15,
    borderRadius: 25,
    justifyContent: "center",
    alignContent: "space-between",
    height: 100,
    width: 220,
    shadowColor: "#0E0D0D",
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default HomePageScreenUser;
