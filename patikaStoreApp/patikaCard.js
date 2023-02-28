import React from "react";
import { View,Text,Image,StyleSheet,SafeAreaView } from "react-native";
import card from "../Card/card";

import styles from  './patikaCardStyle';

const PatikaCard = ({cards}) =>{
  if(cards.instock == false){
    cards.instock = <Text>STOKTA YOK</Text>
  }

    return(
   
            <View style={styles.container}>
                <Image style={styles.image} source={{uri:cards.imgURL}}></Image>
                <Text style={styles.title}>{cards.title}</Text>
                <Text style={styles.price}>{cards.price}</Text>
                <Text style={styles.instock}>{cards.instock}</Text>
            </View>
      
    )




}

export default PatikaCard;