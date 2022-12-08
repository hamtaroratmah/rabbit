import React from 'react';
import { TextInput, Image, StyleSheet, Text, View, Button,ScrollView } from 'react-native';


const LogInScreen = ({navigation}) => {
  return (
      <View style={styles.container}>
        <View >
          <Image source = {
            require('./img/logo.png')
          }
          style = {styles.logo}
          />
        </View>
        <View>
          <Text style={styles.caption}>Log in to your account</Text>
        </View>
        <View>
          <TextInput style={styles.inputs}
            placeholder='Email'
          />
          <TextInput style={styles.inputs}
            placeholder='Password' 
          /> 
        </View>
        <View style={styles.buttons}>
          <Button
              title="Log in "
              color="white" 
              onPress={()=> navigation.navigate('Home')}
            />
        </View>
        <View>
          <Text 
            onPress={()=>navigation.navigate('SignIn')}
            style={styles.href}
          >
            Create new account
          </Text>
        </View>
      </View>
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
    height:50,
    width:300,
    backgroundColor: 'white',
    margin:20,
    padding:30,
    borderRadius:25,
    borderColor:'#142b6f',
    borderWidth:1
  },
  href: {
    fontSize: 15,
    margin:10,
    justifyContent: 'center',
    textAlign: 'center',
    color : '#142b6f'
  }
});
export default LogInScreen;