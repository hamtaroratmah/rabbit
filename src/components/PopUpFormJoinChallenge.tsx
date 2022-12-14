import {
  StyleSheet,
  Text,
  Pressable,
  View,
  KeyboardAvoidingView,
} from "react-native";
import Modal from "react-native-modal";
import CostumedTextInputActivity from "./CostumedTextInputActivity";
import { useState } from "react";

export type Props = {
  isVisible: boolean;
  actionCancel: any;
  actionJoin: any;
};

const PopUpFormJoinChallenge = ({
  isVisible,
  actionCancel,
  actionJoin,
}: Props) => {
  const [goal, setGoal] = useState("");
  const [desciptipn, setDescription] = useState("");

  return (
    <KeyboardAvoidingView>
      <Modal isVisible={isVisible} avoidKeyboard={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.textGaolDescription}>Your goal : </Text>

            {/**Goal input */}
            <View style={styles.containerInputGoal}>
              <CostumedTextInputActivity
                placeHolderText="example : 10"
                value={goal}
                setValue={setGoal}
                type="numeric"
                isMultiline={false}
                maxLength={4}
                stylesProps={styles.textInputGaol}
              />
              <Text> unité/ unité </Text>
            </View>

            <Text style={styles.textGaolDescription}> Description : </Text>

            {/**Description input */}
            <CostumedTextInputActivity
              placeHolderText="maximum 100 letters"
              value={desciptipn}
              setValue={setDescription}
              type="default"
              isMultiline={true}
              maxLength={100}
              stylesProps={styles.textInputDescription}
            />

            {/**btn */}
            <View style={styles.contenairBtn}>
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? "#82A8B7" : "#207B9F",
                  },
                  styles.btn,
                ]}
                onPress={actionCancel}
              >
                <Text style={styles.textBtn}> Cancel </Text>
              </Pressable>

              {/** action Join a challenge */}
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? "#82A8B7" : "#207B9F",
                  },
                  styles.btn,
                ]}
                onPress={actionJoin}
              >
                <Text style={styles.textBtn}> Join </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    marginTop: 22,
  },
  modalView: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#0E0D0D",
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textGaolDescription: {
    fontSize: 16,
    margin: 10,
  },
  containerInputGoal: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 15,
  },
  textInputGaol: {
    width: 170,
  },
  textInputDescription: {
    height: 150,
    alignSelf: "stretch",
    margin: 10,
    alignItems: "stretch",
  },
  contenairBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn: {
    alignSelf: "flex-end",
    borderRadius: 10,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    height: 35,
    marginTop: 10,
  },
  textBtn: {
    color: "#FEFEFE",
  },
});

export default PopUpFormJoinChallenge;
