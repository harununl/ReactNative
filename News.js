import React from "react";

import { SafeAreaView,Text,View,FlatList,StyleSheet,ScrollView, Image,Dimensions } from "react-native";
import newsData from './news_data.json';
import NewsCard from "./NewsCard";
import newsBanner from "./news_banner_data.json";

const renderNews = ({item}) => <NewsCard news={item}></NewsCard>

function app(){
    return(
        <SafeAreaView style={styles.container}> 
            <View >
               
                <Text style={styles.title}>News</Text>

                <FlatList data={newsData}
                ListHeaderComponent={()=>( <ScrollView horizontal showsVerticalScrollIndicator={false}>
                    {
                        newsBanner.map(bannerNews => <Image
                             style={styles.banner_image}
                             source={{uri: bannerNews.imageUrl}}
                             ></Image>)
                    }
                </ScrollView>)}
                keyExtractor={(item)=> item.u_id.toString()}
                //renderItem={({item})=> <NewsCard news={item}
                renderItem={renderNews}>

                </FlatList>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#eceff1',
    },
    title:{
        color: 'black',
        fontWeight:"bold",
        textAlign: 'left',
        fontSize: 30

    },
    banner_image:{
        height: Dimensions.get('window').height /5,
        width:Dimensions.get('window').height /2,
    },
})

export default app;