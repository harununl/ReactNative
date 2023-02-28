import React,{useState} from "react";

import { View,Text,Button,SafeAreaView,Switch,FlatList } from "react-native";

let counter = 0;

const data=[
    {id:0,name: 'istanbul', isFavorite: true},
    {id:1,name: 'ankara', isFavorite: false},
    {id:2,name: 'izmir', isFavorite: true},
    {id:3,name: 'bursa', isFavorite: false},
    {id:4,name: 'antalya', isFavorite: true},
    {id:5,name: 'karabük', isFavorite: false},
    {id:6,name: 'edirne', isFavorite: true},
]

function App(){

   

    const [cityList,setCityList] = useState(data);
    const [showOnlyFavorites, setOnlyFavorites] = useState(false);
   function onFavoriteChange(isFavoriteSelected){
     setOnlyFavorites(isFavoriteSelected);
     isFavoriteSelected ? setCityList(cityList.filter(city => city.isFavorite))
  : setCityList(data);
   }

   
    return(

        <SafeAreaView>
        <View>
            <Text>Show only favorites</Text>
        </View>
        <Switch value={showOnlyFavorites} onValueChange={(onFavoriteChange)}></Switch>
        <FlatList data={cityList} 
        renderItem={({item}) => <Text style={{fontSize: 40}}>{item.name}</Text>} />

      
        </SafeAreaView>
       



    )



}
export default App;