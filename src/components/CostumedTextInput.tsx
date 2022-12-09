import React from 'react'
import { TextInput, View ,StyleSheet } from 'react-native';

export type Props = {
    placeHolderText: string;
    value: string;
    setValue:any;
    secureTextEntry:boolean
};


const CostumedTextInput =({placeHolderText,value,setValue,secureTextEntry}: Props) => {
    return (
        
            <TextInput style={styles.inputs}
                value={value}
                placeholder={placeHolderText}
                onChangeText={setValue}
                secureTextEntry={secureTextEntry}
            />
       
    )   
}

const styles = StyleSheet.create({
    inputs:{
      width:300,
      //backgroundColor: 'white',
      margin:10,
      padding:15,
      borderRadius:25,
      borderColor:'#142b6f',
      borderWidth:2
    }
  });

  export default CostumedTextInput;