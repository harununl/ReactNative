import React,{useState} from 'react';
import {View,StyleSheet,FlatList} from 'react-native';
import music_data from '../musicData.json';
import SongCard from './songCard';
import SearchBar from './searchBar';




function app(){

    const [list,setList] = useState(music_data);

    const renderMusic = ({item}) =>  <SongCard song = {item}></SongCard>

     const handleSearch = text =>{
        const filteredList = music_data.filter(song => {
            const searchedText = text.toLowerCase();
            const currentTitle = song.title.toLowerCase();

           return  currentTitle.indexOf(searchedText) > -1;
        })

        setList(filteredList);
     };


    return(

       
          
              
            <View>
              <SearchBar onSearch={handleSearch}/>
            <FlatList data={list} renderItem={renderMusic}
            keyExtractor = {item => item.id} />
            </View>
      




    )




}




export default app;


const styles =  StyleSheet.create({
   
    input:{
        marginBottom:10,
        borderRadius: 15,
        backgroundColor: '#eceff1',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
    
      },
})