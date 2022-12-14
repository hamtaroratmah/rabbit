import { TextInput, StyleSheet } from "react-native";

export type Props = {
  placeHolderText: string;
  value: string;
  setValue: any;
  type: any;
  maxLength: number;
  isMultiline: boolean;
  stylesProps: any;
};

const CostumedTextInputActivity = ({
  placeHolderText,
  value,
  setValue,
  type,
  maxLength,
  isMultiline,
  stylesProps,
}: Props) => {
  return (
    <TextInput
      value={value}
      placeholder={placeHolderText}
      onChangeText={setValue}
      keyboardType={type}
      multiline={isMultiline}
      maxLength={maxLength}
      style={[styles.inputs, stylesProps]}
    />
  );
};

const styles = StyleSheet.create({
  inputs: {
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
  },
});

export default CostumedTextInputActivity;
