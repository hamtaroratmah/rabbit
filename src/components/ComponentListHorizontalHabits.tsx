import { View, StyleSheet, Text, FlatList, Pressable } from "react-native";

export type Props = {
  dataList: any;
};

const ComponentListHorizontalHabits = ({ dataList }: Props) => {
  return (
    <View>
      <FlatList
        horizontal
        pagingEnabled={true}
        contentContainerStyle={[{ flexDirection: "row" }]}
        data={dataList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <View style={[styles.habit]}>
              <Text style={styles.textTitleItem}>{item.title}</Text>
              {/**addichage de detail d'une habitude/challenge */}
              <Pressable onPress={() => {}}>
                <Text style={styles.textMoreDetails}>More details</Text>
              </Pressable>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  habit: {
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
  textTitleItem: {
    fontSize: 20,
  },
  textMoreDetails: {
    alignSelf: "flex-end",
    padding: 10,
    fontSize: 16,
    fontStyle: "italic",
  },
});

export default ComponentListHorizontalHabits;
