import React from 'react'
import { View ,StyleSheet} from 'react-native';


const Separator = () => {
    return(
      <View style={styles.line}>
      </View>
      
    )
  }

  const styles = StyleSheet.create({
    line:{
        marginTop:20,
        marginBottom : 20,
        borderBottomColor: '#142b6f',
         borderBottomWidth: 1,
      }
  })

  export default Separator