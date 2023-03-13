import React from "react";
import { StyleSheet,View,Text,SafeAreaView,Image,Dimensions } from "react-native";

import styles from './SongCardStyle';

const SongCard = props =>{

    

    return(

        <View style = {styles.container}>
            <Image style={styles.image}  source={{uri:props.song.imageUrl}} ></Image>
            <View style = {styles.containerTitle}>
            <Text style={styles.title}>{props.song.title}</Text>
           <View style={styles.contentContainer}>
           <View style = {styles.containerArtist}>
            <Text style={styles.artist}>{props.song.artist}   </Text>
            <Text>{props.song.year}</Text>
            </View>

            {props.song.isSoldOut == true ? (
            <View  style = {styles.containerisSold}>
            <Text  style = {styles.isSold}>TÜKENDİ</Text>
            </View>) : null}
           </View>
           
            </View>
            

        </View>





    )
}

export default SongCard;

