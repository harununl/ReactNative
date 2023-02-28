import React from 'react';
import {View,Text, SafeAreaView,Button,StyleSheet,TouchableOpacity} from 'react-native';

import Card from './card';

function App (){

return(
  <SafeAreaView style={styles.container}>
      {/* <View style={styles.card_container}>
        <View style={styles.card_body}>
        <Text style={styles.card_title}>Eddard Stark</Text>
       <Text style={styles.card_text}>Winter is coming...</Text>
        </View>

        <TouchableOpacity style={styles.card_button_container}>
            <Text style={styles.card_button_title}>I LIKED</Text>
        </TouchableOpacity>
        
      
    </View>
    <View style={styles.card_container}>
        <View style={styles.card_body}>
        <Text style={styles.card_title}>Arif Işık</Text>
       <Text style={styles.card_text}>Evet tarafından</Text>
        </View>

        <TouchableOpacity style={styles.card_button_container}>
            <Text style={styles.card_button_title}>I LIKED</Text>
        </TouchableOpacity>
        
      
    </View>
    <View style={styles.card_container}>
        <View style={styles.card_body}>
        <Text style={styles.card_title}>Serbest</Text>
       <Text style={styles.card_text}>Benim babam kutu kola gibi adamdır ya..</Text>
        </View>

        <TouchableOpacity style={styles.card_button_container}>
            <Text style={styles.card_button_title}>I LIKED</Text>
        </TouchableOpacity>
        
      
    </View> */}
    <Card title="Eddard Stark" text="Winter is coming" />
    <Card title="Arif Işık" text="Evet tarafından" />
    <Card title="Serbest" text="benim babam kutu kola gibi adamdır" />
    

  </SafeAreaView>
  
)
}

const styles = StyleSheet.create(
   
    { container:{
        flex: 1,
        backgroundColor:'#e0e0e0',
        padding: 20

    },

    card_container:{
        backgroundColor: 'white',
        margin: 10,
        
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray',
        
        
    },
    card_body:{
        padding: 10,

    },
    card_title:{
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
        marginBottom: 3,
        color:'black',
        
    },
    card_text:{
        fontSize: 15,
        margin: 10,
        marginTop: 3,
        color:'black',
        
    },
    card_button_container:{
        backgroundColor: '#00C2FF',
        padding: 10,
        alignItems:'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius:10,

    },
    card_button_title:{
        fontWeight: 'bold',
        color: 'white',
        fontSize:20,
    }

   }

)

export default App;