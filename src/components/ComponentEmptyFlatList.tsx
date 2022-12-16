import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";

export type Props = {
  textEmpty: string;
  textCreate: string;
  textAction: string;
  action: any;
};

const ComponentEmptyFlatList = ({
  textEmpty,
  textCreate,
  textAction,
  action,
}: Props) => {
  return (
    <View style={styles.contenair}>
      <Text style={styles.textEmpty}>{textEmpty}</Text>
      <View style={styles.contenairTextAction}>
        <Text>{textCreate}</Text>
        <Pressable onPress={action}>
          <Text style={styles.textAction}> {textAction} </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenair: {
    justifyContent: "center",
  },
  textEmpty: {
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 10,
  },
  contenairTextAction: {
    flexDirection: "row",
    justifyContent:"center"
  },
  textAction: {
    fontStyle: "italic",
    color: "blue",
  },
});

export default ComponentEmptyFlatList;
