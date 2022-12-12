import React from 'react';
import { Image, StyleSheet, Text, View, Button,ScrollView ,KeyboardAvoidingView, Platform} from 'react-native';
import CostumedButton from '../components/CostumedButton';
import CostumedTextInput from '../components/CostumedTextInput';
import Separator from '../components/CostumedLine';
import ButtonLoginGoogle from '../components/CostumedGoogleButton';

const SignUpScreen = ({navigation}) => {
  const [firstname, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [pseudo, setPseudo] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmationPassword, setConfirmationPassword] = React.useState('');
  return (
    
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "position" : "height"} style={styles.container}>
        <View>
          <Image source = {
            require('./../../assets/img/logo.png')
          }
          style = {styles.logo}
          />
          <ButtonLoginGoogle text='Register with Google'/>
        </View>
        <View>
          <Text style={styles.caption}>Create new account</Text>
        </View>
        <View style={styles.center}>
          <CostumedTextInput placeHolderText='Pseudo' value={pseudo} setValue={setPseudo} secureTextEntry={false}/>
          <CostumedTextInput placeHolderText='Email' value={email} setValue={setEmail} secureTextEntry={false}/>
          <CostumedTextInput placeHolderText='Password' value={password} setValue={setPassword} secureTextEntry={true} />
          <CostumedTextInput placeHolderText='Confirm password' value={confirmationPassword} setValue={setConfirmationPassword} secureTextEntry={true}/>
        </View >
        <View style={styles.center}>
          <CostumedButton text='Create' action={()=> navigation.navigate('Welcome')} />
        </View>
        <View>
          <Text style={styles.textQuestion}>
            Already have an account ?
          </Text>
          <Text 
           onPress={()=>navigation.navigate('SignIn')}
          style={styles.href} >
          Log in to your account 
          </Text>
          </View>     
      </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:  '#9da5c0',
    justifyContent: 'center',
  },
  caption: {
    fontSize: 18,
    justifyContent: 'center',
    textAlign: 'center',
    color : '#142b6f',
    alignSelf:'center'

  },
 logo : {

    width : 180,
    height : 180,
    overflow: 'visible', 
    alignSelf:'center'  
  },
  center:{
    alignSelf:'center',
  },
  textQuestion:{
    fontSize: 15,
    justifyContent: 'center',
    textAlign: 'center',
    color:'#EAF2EF',
    fontWeight:'bold'
  }, 
  href: {
    fontSize: 15,
    margin:10,
    justifyContent: 'center',
    textAlign: 'center',
    color : '#142b6f',
    alignSelf:'center',
    textDecorationLine:'underline'    
  },
});
export default SignUpScreen;