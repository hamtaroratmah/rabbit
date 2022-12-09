import React from 'react';
import { Image, StyleSheet, Text, View, Button,ScrollView ,KeyboardAvoidingView, Platform} from 'react-native';
import CostumedButton from '../components/CostumedButton';
import CostumedTextInput from '../components/CostumedTextInput';

const SignInScreen = ({navigation}) => {
  const [firstname, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [pseudo, setPseudo] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmationPassword, setConfirmationPassword] = React.useState('');
  return (
    
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "position" : "height"} style={styles.container}>
        <View style={styles.container}>
          <Image source = {
            require('./../../assets/img/logo.png')
          }
          style = {styles.logo}
          />
        </View>
        <View>
          <Text style={styles.caption}>Create new account</Text>
        </View>
        <View>
          <CostumedTextInput placeHolderText='First Name' value={firstname} setValue={setFirstName} secureTextEntry={false}/>
          <CostumedTextInput placeHolderText='Last Name' value={lastName} setValue={setLastName} secureTextEntry={false}/>
          <CostumedTextInput placeHolderText='Pseudo' value={pseudo} setValue={setPseudo} secureTextEntry={false}/>
          <CostumedTextInput placeHolderText='Email' value={email} setValue={setEmail} secureTextEntry={false}/>
          <CostumedTextInput placeHolderText='Password' value={password} setValue={setPassword} secureTextEntry={true} />
          <CostumedTextInput placeHolderText='Confirm password' value={confirmationPassword} setValue={setConfirmationPassword} secureTextEntry={true}/>
        </View >
        <View style={styles.container}>
          <CostumedButton text='Create' action={()=> navigation.navigate('Welcome')} />
        </View>
      </KeyboardAvoidingView>
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
    backgroundColor : '#F59801'
  }
});
export default SignInScreen;