import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';
import CostumedOrangeButton from '../components/CostumedOrangeButton';
import CostumedHeader from '../components/CostumedHeader';
import { useEffect, useState, useContext} from 'react';
import Separator from '../components/CostumedLine';
import PopUpFormJoinChallenge from '../components/PopUpFormJoinChallenge';
import { ChallengesController } from '../controllers/ChallengesController';

const opacityBody = 1;
const JoinChallengeScreen = ({ navigation }) => {
  const [challenges, setChallenges] = useState([
    {
      id: '1',
      pseudo: 'pseudo',
      dateStart: '22/1/2019',
      dateEnd: '10/10/2019',
      description:
        'Radio buttons are an essential element of forms. They are used when there is a list of two or more options that are mutually exclusive and the user must select exactly one choice. In other words, clicking a non-selected radio button will deselect whatever other button was previously selected in the list.'
    },
    {
      id: '2',
      pseudo: 'pseudo',
      dateStart: '22/1/2019',
      dateEnd: '10/10/2019',
      description:
        'Radio buttons are an essential element of forms. They are used when there is a list of two or more options that are mutually exclusive and the user must select exactly one choice. In other words, clicking a non-selected radio button will deselect whatever other button was previously selected in the list.'
    },
    {
      id: '3',
      pseudo: 'pseudo',
      dateStart: '22/1/2019',
      dateEnd: '10/10/2019',
      description:
        'Radio buttons are an essential element of forms. They are used when there is a list of two or more options that are mutually exclusive and the user must select exactly one choice. In other words, clicking a non-selected radio button will deselect whatever other button was previously selected in the list.'
    }
  ]);
  let nbOfColoumns = 1;
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const [opacityBody, setOpacityBody] = useState(1);
  let hidePopUp = () => {
    setIsPopUpVisible(false);
    setOpacityBody(1);
  };
  let showPopUp = () => {
    setIsPopUpVisible(true);
    setOpacityBody(0.5);
  };

  const controller = new ChallengesController();

  let newChallenges;
  const getChallenges = async () => {
    newChallenges = await controller.getAllChallenges();
    return newChallenges;
  };
  useEffect(() => {
    getChallenges().then((data) => {
      // @ts-ignore
      setChallenges(data);
    });
  }, []);


  return (
    <View style={styles.container}>
      {/** Header */}
      <View>
        <Header containerStyle={{ backgroundColor: '#F1F3F3' }} />
        <CostumedHeader
          text='Join a challenge or create your own challenge'
          titlePage='Activities'
        />
      </View>

      {/** body => list of challengens*/}
      <View style={styles.containerBody}>
        <FlatList
          contentContainerStyle={styles.listChallenges}
          numColumns={nbOfColoumns}
          data={challenges}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <View style={styles.contenairChallenge}>
                <View>
                  <Text style={styles.textPseudo}> By {item.creator}</Text>
                  <Text>
                    {item.start} - {item.end}{' '}
                  </Text>
                  <Separator />
                </View>

                <View>
                  <Text numberOfLines={3} style={{ padding: 10 }}>
                    {item.description}
                  </Text>
                </View>

                <Pressable
                  style={({ pressed }) => [
                    {
                      backgroundColor: pressed
                        ? 'rgb(210, 230, 255)'
                        : '#fefefe'

                    },
                    styles.btnJoin

                  ]}
                  onPress={showPopUp}
                >
                  <Text style={styles.textBtnJoin}> Join </Text>
                </Pressable>
              </View>
            );
          }}
        />
      </View>

      {/**Btn add */}
      <View>
        <CostumedOrangeButton text='Create challenge' action={() => console.log('bonsoir')} />
      </View>

      {/**Pop up */}

      <PopUpFormJoinChallenge
        isVisible={isPopUpVisible}
        actionCancel={hidePopUp}
        actionJoin={() => {
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F3F3',
    opacity: 1
  },
  containerBody: {
    flex: 1 / 1.2,
    margin: 15,
    backgroundColor: '#FEFEFE',
    borderRadius: 25,
    shadowColor: '#0E0D0D',
    shadowOffset: {
      width: 1,
      height: 3
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
    //maxHeight: 550,
  },
  listChallenges: {
    alignSelf: 'center'
  },
  contenairChallenge: {
    backgroundColor: '#A1CDDE',
    margin: 15,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    width: 300,
    shadowColor: '#0E0D0D',
    shadowOffset: {
      width: 1,
      height: 3
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  textPseudo: {
    fontSize: 20,
    alignSelf: 'center'
  },
  btnJoin: {
    width: 100,
    height: 30,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 25
    // backgroundColor: "#fefefe",
  },
  textBtnJoin: {
    color: '#010101',
    fontSize: 16
  }
});
export default JoinChallengeScreen;
