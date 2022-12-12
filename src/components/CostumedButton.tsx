import React from 'react'
import { Button, View ,StyleSheet, Pressable, Text } from 'react-native';

export type Props = {
    text: string;
    action: any;
};


const CostumedButton =({ text, action }: Props) => {

    return (
        <Pressable style={styles.button} onPress={action}>
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
        backgroundColor : '#207B9F',
        
      },
      textBtn : {
        color:'#FFFBFB',
        fontSize:18,
      }
  });

  export default CostumedButton;