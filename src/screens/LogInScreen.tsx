import React from 'react';
import { TextInput, Image, StyleSheet, Text, View, Button } from 'react-native';
import CostumedButton from '../components/CostumedButton';
import CostumedTextInput from '../components/CostumedTextInput';


const LogInScreen = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
      <View style={styles.container}>
        <View >
          <Image source = {
            require('./../../assets/img/logo.png')
          }
          style = {styles.logo}
          />
        </View>
        <View>
          <Text style={styles.caption}>Log in to your account</Text>
        </View>
        <View>
          
          <CostumedTextInput placeHolderText='Email' value={email} setValue={setEmail} secureTextEntry={false}/>
          <CostumedTextInput placeHolderText='Password' value={password} setValue={setPassword} secureTextEntry={true} />
        </View>
        <View>
          <CostumedButton text='Log in' action={()=> navigation.navigate('Welcome')}/>
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
  href: {
    fontSize: 15,
    margin:10,
    justifyContent: 'center',
    textAlign: 'center',
    color : '#142b6f',
    
  }
});
export default LogInScreen;