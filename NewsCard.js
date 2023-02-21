import React from "react";
import { View,Text,Image,StyleSheet,SafeAreaView } from "react-native";
import styles from './NewsCard.style';


const NewsCard = ({news})=>{
    return(
       <SafeAreaView>
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:news.imageUrl}}></Image>
            <Text style={styles.title}>{news.title}</Text>
            <Text style={styles.description}>{news.description}</Text>
            <Text style={styles.author}>{news.author}</Text>

        </View>

        </SafeAreaView>
    )
}




export default NewsCard;