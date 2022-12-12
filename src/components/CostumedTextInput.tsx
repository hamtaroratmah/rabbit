import React, { useRef } from "react";
import { TextInput, View, StyleSheet } from "react-native";

export type Props = {
  placeHolderText: string;
  value: string;
  setValue: any;
  secureTextEntry: boolean;
};

const CostumedTextInput = ({
  placeHolderText,
  value,
  setValue,
  secureTextEntry,
}: Props) => {
  return (
    <TextInput
      style={styles.inputs}
      value={value}
      placeholder={placeHolderText}
      onChangeText={setValue}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  inputs: {
    width: 280,
    backgroundColor: "#F1F4FA",
    margin: 10,
    padding: 15,
    borderRadius: 25,
    color: "gray",
    fontSize: 15,
  },
});

export default CostumedTextInput;
