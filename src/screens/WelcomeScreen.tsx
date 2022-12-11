
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import CostumedButton from '../components/CostumedButton';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source = {
          require('./../../assets/img/logo.png')
        }
        style = {styles.logo}
        />
      </View>
      <View>
      <Text style={styles.caption}>
        We are what we repeatedly do. Excellence, then, is not an act, but a habbit. 
      </Text>
      </View>
      <View>
      <CostumedButton text='Sign in' action={()=> navigation.navigate('SignIn')}/>
      </View>
      <View>
      <CostumedButton text='Sign up' action={()=> navigation.navigate('SignUp')}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9da5c0',
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
  }
});
export default WelcomeScreen;