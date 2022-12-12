import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import CostumedButton from '../components/CostumedButton';
import CostumedTextInput from '../components/CostumedTextInput';
import Separator from '../components/CostumedLine';
import ButtonLoginGoogle from '../components/CostumedGoogleButton';



 



const SignInScreen = ({navigation}) => {
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
        <View style={styles.button}>
          
          <CostumedTextInput placeHolderText='Email' value={email} setValue={setEmail} secureTextEntry={false}/>
          <CostumedTextInput placeHolderText='Password' value={password} setValue={setPassword} secureTextEntry={true} />
        </View>
        <View style={styles.button}>
          <CostumedButton text='Log in' action={()=> navigation.navigate('Welcome')}/>
        </View>

        <View>

        <Text style={styles.textQuestion}>
        Want to join us ?
          </Text>
          <Text 
            onPress={()=>navigation.navigate('SignUp')}
            style={styles.href}
          >
            Create new account
          </Text>
        </View>
        <View>
          <Separator/>
        </View>
        <ButtonLoginGoogle text='Connect with Google'/>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
   justifyContent: 'center',
    padding:15, 
    backgroundColor: '#9da5c0'
  },
  logo : {
    marginTop:45,
    width : 180,
    height : 180,
    overflow: 'visible', 
    alignSelf:'center'  
  },
  caption: {
    fontSize: 18,
    justifyContent: 'center',
    textAlign: 'center',
    color : '#142b6f',
    alignSelf:'center'
  },

  button:{
    alignSelf:'center',
  },

  textQuestion:{
    fontSize: 15,
    justifyContent: 'center',
    textAlign: 'center',
    color:'#EAF2EF',
    fontWeight:'bold',

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
export default SignInScreen;