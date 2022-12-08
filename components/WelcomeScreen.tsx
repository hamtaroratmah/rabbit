
import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';


const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      
      <View>
        <Image source = {
          require('./img/logo.png')
        }
        style = {styles.logo}
        />
      </View>
      <View>
      <Text style={styles.caption}>
        We are what we repeatedly do. Excellence, then, is not an act, but a habbit. 
      </Text>
      </View>
      <View style={styles.buttons}>
        <Button
          title="Log in "
          color="white" 
          onPress={()=> navigation.navigate('LogIn')}
        />
      </View>
      <View style={styles.buttons}>
        <Button
          title="Sign in"
          color="white"
          onPress={()=> navigation.navigate('SignIn')}
        />
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
  },
  caption: {
    fontSize: 18,
    marginBottom: 15,
    justifyContent: 'center',
    textAlign: 'center',
    color : '#142b6f'
  },
  logo : {
    margin:0,
    width : 200,
    height : 200,
    overflow: 'visible'
  },
  buttons : {
    fontSize:18,
    margin:15,
    padding: 10,
    width: 150,
    alignItems : 'center',
    justifyContent : 'center',
    borderRadius : 25,
    //backgroundColor : '#FFD601'
    backgroundColor : '#F59801'
  }
});
export default WelcomeScreen;