import React from "react";

import { StyleSheet,View,Text,SafeAreaView,Dimensions,FlatList,TextInput } from "react-native";
import card from "../Card/card";
import PatikaData from './patika.json'

import PatikaCard from "./patikaCard";


const RenderPatika = ({item}) => <PatikaCard cards ={item}></PatikaCard>


function App(){
 
    return(

        <SafeAreaView style={styles.container}>

 
            <Text style={styles.title} >PATIKASTORE</Text>

            <TextInput style={styles.input}  placeholder="Ara.."></TextInput>

            <FlatList   data={PatikaData}
              
                //renderItem={({item})=> <PatikaCard cards ={item}/>}
                renderItem={RenderPatika}
               keyExtractor={(item)=> item.id.toString()}
             
                numColumns={2}
                
                />

              
                
          

        </SafeAreaView>

    )
}
export default App;
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
   
    
    
  
   
  },
  title:{
    marginLeft: 10,
    color: 'purple',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign:"left",
    marginBottom: 10,
    marginTop: 10,

    
  },
  input:{
    marginBottom:10,
    borderRadius: 15,
    backgroundColor: '#eceff1',
    marginLeft: 10,
    marginRight: 10,

  },

})

