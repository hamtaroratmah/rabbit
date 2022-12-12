import { View, StyleSheet ,Image } from "react-native";


const ComponentIcons =()=>{
    return(
        <View style={styles.containerIcons}>
        <Image
          source={require("./../../assets/icons/add.png")}
          style={styles.icon}
        />
        <Image
          source={require("./../../assets/icons/medal.png")}
          style={styles.icon}
        />
        <Image
          source={require("./../../assets/icons/home.png")}
          style={styles.icon}
        />
        <Image
          source={require("./../../assets/icons/msg.png")}
          style={styles.icon}
        />
        <Image
          source={require("./../../assets/icons/profile.jpg")}
          style={[styles.icon, { borderRadius: 50 }]}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    containerIcons: {
        flex: 1 / 4,
        flexDirection: "row",
        justifyContent: "space-around",
      },
        icon: {
            height: 50,
            width: 50,
          },
    
})

export default ComponentIcons;