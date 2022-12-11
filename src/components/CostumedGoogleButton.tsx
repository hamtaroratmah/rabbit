import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const ButtonLoginGoogle = (props) => {
  const loginWithGoogle = () => {
    console.log('Button pressed');
  };
  
  return (
    <View style={styles.container}>
      <FontAwesome.Button name="google" color="#142b6f" 
      backgroundColor="white"
      style={{fontFamily: "Roboto"}} 
      onPress={loginWithGoogle}>
        <Text style={styles.text}> {props.text}</Text>
      </FontAwesome.Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginBottom:30,
    marginTop: 10,
    width: 200,
    height:50,
    alignContent:'center',
  },
  text:{
    fontSize :16,
    color:'black'
  }
});

export default ButtonLoginGoogle
