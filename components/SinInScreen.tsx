import React from 'react';
import { TextInput, Image, StyleSheet, Text, View, Button,ScrollView } from 'react-native';


const SignInScreen = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View >
          <Image source = {
            require('./img/logo.png')
          }
          style = {styles.logo}
          />
        </View>
        <View>
          <Text style={styles.caption}>Create new account</Text>
        </View>
        <View>
          <TextInput style={styles.inputs}
            placeholder='First name' 
          /> 
          <TextInput style={styles.inputs}
            placeholder='Last Name' 
          /> 
          <TextInput style={styles.inputs}
            placeholder='Pseudo' 
          /> 
          <TextInput style={styles.inputs}
            placeholder='Email'
          />
          <TextInput style={styles.inputs}
            placeholder='Password' 
          /> 
        </View>
        <View style={styles.buttons}>
          <Button
              title="Create"
              color="white" 
              onPress={()=> navigation.navigate('LogIn')}
            />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:15
  },
  caption: {
    fontSize: 18,
    justifyContent: 'center',
    textAlign: 'center',
    color : '#142b6f'
  },
  logo : {
    margin:0,
    width : 100,
    height : 100,
    overflow: 'visible', 
  },
  buttons : {
    fontSize:18,
    width: 150,
    height:50,
    alignItems : 'center',
    justifyContent : 'center',
    borderRadius : 25,
    //backgroundColor : '#FFD601'
    backgroundColor : '#F59801'
  },
  inputs:{
    height:30,
    width:300,
    backgroundColor: 'white',
    margin:10,
    padding:30,
    borderRadius:25,
    borderColor:'#142b6f',
    borderWidth:1
  }
});
export default SignInScreen;