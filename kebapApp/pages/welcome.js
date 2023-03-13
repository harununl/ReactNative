import React from "react";
import { Text,SafeAreaView,View,Button } from "react-native";
import styles from './welcome.style';

function welcome(props){

  function createMember(){
   // console.log(props);

    props.navigation.navigate('Login')


  }
    return(
        <SafeAreaView style={styles.container}>
               <Text style={styles.header}>Welcome</Text>  
               <Button style={styles.button} title="Üye Kaydı Oluştur" onPress={createMember}></Button>           
        </SafeAreaView>
        
    )
}

export default welcome;