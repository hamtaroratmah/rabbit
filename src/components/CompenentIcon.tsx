import { View,Image,StyleSheet} from "react-native";

const slides = {
    home: require("../../assets/icons/domicile.png"),
    profile: require("../../assets/icons/utilisateur.png"),
    challenge: require("../../assets/icons/drapeau.png"),
    habbit: require("../../assets/icons/habitudes.png"),
    chat: require("../../assets/icons/discuter.png"),
  }
export type Props = {
    source:string
}
const ComponentIcon =({source}:Props)=>{

        
            if (source=="home") {
                return(
                    <View>
                         <Image
                            source={slides.home}
                            style={styles.icon}
                        />
                    </View>
                )
            }else if (source=="profile"){
                return(
                    <View>
                         <Image
                            source={slides.profile}
                            style={styles.icon}
                        />
                    </View>
                )
            }else if (source=="challenge"){
                return(
                    <View>
                         <Image
                            source={slides.challenge}
                            style={styles.icon}
                        />
                    </View>
                )
            }else if(source=="habbit"){
                return(
                    <View>
                         <Image
                            source={slides.habbit}
                            style={styles.icon}
                        />
                    </View>
                )
            }else{
                return(
                    <View>
                         <Image
                            source={slides.chat}
                            style={styles.icon}
                        />
                    </View>
                )
            }
}

const styles = StyleSheet.create({
    icon: {
        maxHeight: 40,
        maxWidth: 40,
    },
    
})

export default ComponentIcon;