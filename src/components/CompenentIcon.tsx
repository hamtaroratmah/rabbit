import { View,Image,StyleSheet} from "react-native";

const slides = {
    home: require("../../assets/img/domicile.png"),
    profile: require("../../assets/img/utilisateur.png"),
    challenge: require("../../assets/img/drapeau.png"),
    habbit: require("../../assets/img/habitudes.png"),
    chat: require("../../assets/img/discuter.png"),
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
        height: 40,
        width: 40,
    },
    
})

export default ComponentIcon;