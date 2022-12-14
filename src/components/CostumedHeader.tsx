import {
    Text,
    View,
    StyleSheet,
  } from "react-native";
  

  export type Props = {
    titlePage: string;
    text: string;
  };


const CostumedHeader = ({titlePage, text }: Props) => {
  return (
    <View style={styles.header}>
        <Text style={styles.titlePage}>
            {titlePage}
        </Text>
      <Text style={styles.text} >
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    header:{
        backgroundColor: "#0F4E67",
        borderBottomRightRadius:25,
        borderTopLeftRadius:25,
        marginTop: 40,//à changer 
        marginHorizontal: 10,
        justifyContent:"center",
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
    titlePage:{
        color: "#FEFEFE",
        fontSize: 17,
        fontWeight:"bold",
        paddingLeft:15,
    },
    text:{
        color: "#FEFEFE",
        fontSize: 17,
        alignSelf:"center"
    }
})

export default CostumedHeader;