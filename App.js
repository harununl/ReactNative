import React from 'react';
import {View,Text, SafeAreaView,Button,StyleSheet} from 'react-native';



const app = () => {
function sayHello(){
    console.log("merhaba");
}
return(
  <SafeAreaView style={styles.container}>
      <View style={styles.upper_view_container}>
        <Text>
            hello world
        </Text>
       
    </View>
    <View style={styles.bottom_view_container}>
        <Text>
            hello world
        </Text>
       
    </View>
 {/* <Button title='Hoşgeldiniz' onPress={sayHello} disabled = {false} color = "lightcoral" ></Button> */}

  </SafeAreaView>
  
)
}

const styles = StyleSheet.create(
   
    { container:{
        flex: 1,
        flexDirection: 'row'

    },
    upper_view_container: {
    backgroundColor: 'red',
    flex: 1,
    // margin: 10,
    // padding: 20,
    // borderRadius: 20,
},
bottom_view_container: {
    backgroundColor: 'blue',
    flex: 1,

}}

)

export default app;