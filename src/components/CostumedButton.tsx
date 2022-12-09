import React from 'react'
import { Button, View ,StyleSheet } from 'react-native';

export type Props = {
    text: string;
    action: any;
};


const CostumedButton =({ text, action }: Props) => {

    return (
        <View style={styles.button}>
          <Button
              title={text}
              color="white" 
              onPress={action}
          />
        </View>
    )   
}

const styles = StyleSheet.create({
    button : {
        fontSize:18,
        width: 150,
        height:50,
        margin:10,
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius : 25,
        backgroundColor : '#F59801'
      }
  });

  export default CostumedButton;