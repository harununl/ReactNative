import React from "react";
import { SafeAreaView,Text } from "react-native";
import styles from './show.style';

function Show({route}){

    const {user} = route.params;
    return(
       <SafeAreaView style={styles.container}>
         <Text style={styles.header}>Kayıt Tamamlandı!</Text>
        <Text style={styles.text}>Üye Adı: {user.username}</Text>
        <Text style={styles.text}>Üye Soydı:  {user.userSurname}</Text>
        <Text style={styles.text}>Üye Yaşı:  {user.userAge}</Text>
        <Text style={styles.text}>Üye E-posta: {user.userEmail}</Text>
        <Text style={styles.text}>Üye Memleket:  {user.userHometown}</Text>
       </SafeAreaView>
    )
}

export default Show;