import React,{useState} from "react";
import { Text,SafeAreaView,View,Button,TextInput, Alert } from "react-native";
import styles from './login.style';


function Login({navigation}){

const [userHometown,setUserHometown] = useState(null);
const [username,setUserName] = useState(null);
const [userSurname,setUsersurname] = useState(null);
const [userAge,setUserAge] = useState(null);
const [userEmail,setUserEmail] = useState(null);

    
   function showMember(){

    if(!username || !userSurname || !userAge || !userEmail || !userEmail){
        Alert.alert('Kebap Fitness Salonu','Bilgiler boş bırakılamaz');
    }
    else{
        const user = {
            username,
            userSurname,
            userAge,
            userEmail,
            userHometown
        }
    
        console.log(user);
        navigation.navigate('Show',{user})
    }

   }

    return(
        <SafeAreaView style={styles.container} >
            <Text style={styles.text}>Üye Adı</Text>
            <View style={styles.input}>
            <TextInput  placeholder="Üye Adı Giriniz" onChangeText={setUserName}></TextInput>
            </View>
            
            <Text style={styles.text}>Üye Soyadı</Text>
            <View style={styles.input}>
            <TextInput placeholder="Üye Soyadı Giriniz" onChangeText={setUsersurname}></TextInput>
            </View>
           
            <Text style={styles.text}>Üye Yaşı</Text>
            <View style={styles.input}>
            <TextInput placeholder="Üye Yaşı Giriniz" onChangeText={setUserAge}></TextInput>
            </View>
            
            <Text style={styles.text}>Üye E-posta</Text>
            <View style={styles.input}>
            <TextInput placeholder="Üye E-posta Giriniz" onChangeText={setUserEmail}></TextInput>
            </View>
            
            <Text style={styles.text}>Üye Memleket</Text>
            <View style={styles.input}>
            <TextInput placeholder="Üye Memleket Giriniz" onChangeText={setUserHometown}></TextInput>
            </View>
            
            <Button title="Üye ol" onPress={showMember}></Button>

        </SafeAreaView>
    )
}

export default Login;