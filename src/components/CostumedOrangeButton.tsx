import {StyleSheet, Pressable, Text } from 'react-native';

export type Props = {
    text: string;
    action: any;
};


const CostumedOrangeButton =({ text, action }: Props) => {

    return (
        <Pressable  style={({ pressed }) => [
            {
              backgroundColor: pressed
                ? "rgba(255, 185, 138,0.5)"
                : "#FE9801",
            },
            styles.button,
          ]} onPress={action}>
            <Text style={styles.textBtn}> {text} </Text>
        </Pressable>
    )   
}

const styles = StyleSheet.create({
    button : {
        width: 150,
        height:50,
        margin:10,
        alignItems : 'center',
        justifyContent : 'center',
        alignSelf: 'center',
        borderRadius : 25,
        //backgroundColor : '#FE9801',
        
      },
      textBtn : {
        color:'#010101',
        fontSize:18,
      }
  });

  export default CostumedOrangeButton;