import { useState } from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import CostumedTextInputActivity from "./CostumedTextInputActivity";

const Calendar = () => {
  const [isDateStartVisible, setIsDateStartVisible] = useState(false);
  const [isDateEndVisible, setIsDateEndVisible] = useState(false);
  const [dateStart, setDateStart] = useState(null);
  const [dateEnd, setDateEnd] = useState(null);

  let currentDate: any = new Date();

  // @ts-ignore
  global.dateStart = dateStart;
  // @ts-ignore
  global.dateEnd = dateEnd;

  const showDateStart = () => {
    setIsDateStartVisible(true);
  };

  const showDateEnd = () => {
    setIsDateEndVisible(true);
  };

  const hideDateStart = () => {
    setIsDateStartVisible(false);
  };

  const hideDateEnd = () => {
    setIsDateEndVisible(false);
  };

  const getDateStart = () => {
    if(!dateStart) return ;
    let tempDate = dateStart.toString().split(" ");
    return dateStart !== null
      ? `${tempDate[0]} ${tempDate[1]} ${tempDate[2]} ${tempDate[3]}`
      : "";
  };

  const getDateEnd = () => {
    if(!dateEnd) return ;
    let tempDate = dateEnd.toString().split(" ");
    return dateEnd !== null
      ? `${tempDate[0]} ${tempDate[1]} ${tempDate[2]} ${tempDate[3]}`
      : "";
  };

  const handleConfirmDateStart = (date) => {
    hideDateStart();
    setDateStart(date);
  };

  const handleConfirmDateEnd = (date) => {
    hideDateEnd();
    setDateEnd(date);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.containerDate}>
        <Text> Start date : </Text>
        <TextInput
          style={styles.inputs}
          placeholder="Start date"
          value={getDateStart()}
          onChangeText={setDateStart}
          onPressIn={showDateStart}
          showSoftInputOnFocus={false}
        ></TextInput>

        <DateTimePickerModal
          isVisible={isDateStartVisible}
          mode="date"
          onConfirm={handleConfirmDateStart}
          onCancel={hideDateStart}
          minimumDate={currentDate}
        />
      </View>

      <View style={styles.containerDate}>
        <Text> End Date : </Text>
        <TextInput
          style={styles.inputs}
          placeholder="End Date"
          value={getDateEnd()}
          onChangeText={setDateEnd}
          onPressIn={showDateEnd}
          showSoftInputOnFocus={false}
        ></TextInput>

        <DateTimePickerModal
          isVisible={isDateEndVisible}
          mode="date"
          onConfirm={handleConfirmDateEnd}
          onCancel={hideDateEnd}
          minimumDate={currentDate}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputs: {
    backgroundColor: "#F1F4FA",
    padding: 15,
    borderRadius: 25,
    color: "black",
    fontSize: 15,
    shadowColor: "#0E0D0D",
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 200,
  },

  containerDate: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 10,
    marginBottom: 15,
  },
});

export default Calendar;
