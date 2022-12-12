import { View,Image,StyleSheet} from "react-native";


const ComponentIcon =()=>{
    return(
        <View>
        <Image
          source={require("./../../assets/icons/add.png")}
          style={styles.icon}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    icon: {
        height: 50,
        width: 50,
    },
    
})

export default ComponentIcon;