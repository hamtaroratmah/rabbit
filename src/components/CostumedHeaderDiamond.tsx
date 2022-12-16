import {
  View,
  StyleSheet,
  Text,
  Image,
} from "react-native";
import ProgressExperience from "../components/ProgressExperience";

const CostumedHeaderDiamond=()=>{
    return(
        <View style={styles.containerHeader}>
        <View style={styles.containerPseudoLevel}>
          <Text style={styles.textPseudo}>Welcome</Text>
          <Text style={styles.textLevel}> Level 0</Text>
        </View>

        <View style={styles.conatainerDiamondProgressBar}>
          <Image
            source={require("./../../assets/icons/dia.png")}
            style={[styles.icon]}
          />
          {/********* A refaire par sou */}
          <ProgressExperience />
          {/********* A refaire par sou */}
        </View>

        {/*Pour le diamant qd on atteint un certain niveau le diamant change*/}
      </View>
    )
}


const styles = StyleSheet.create({
    containerHeader: {
      backgroundColor: "#FEFEFE",
      borderBottomRightRadius: 25,
      borderTopLeftRadius: 25,
      // marginTop: 40,//à changer
      marginHorizontal: 10,
      justifyContent: "center",
      height: 90,
      shadowColor: "#0E0D0D",
      shadowOffset: {
        width: 1,
        height: 3,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
  
    },
    containerPseudoLevel: {
      justifyContent: "space-around",
      marginTop: 10,
      flexDirection: "row",
    },
    textPseudo: {
      color: "#0F4E67",
      fontSize: 15,
      fontWeight: "bold",
    },
    textLevel: {
      color: "#0F4E67",
      fontSize: 15,
      fontStyle: "italic",
    },
    conatainerDiamondProgressBar: {
      flex: 2,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 10,
      paddingBottom: 10,
    },
    icon: {
      height: 30,
      width: 30,
      marginRight:10
    },
  });

  export default CostumedHeaderDiamond;