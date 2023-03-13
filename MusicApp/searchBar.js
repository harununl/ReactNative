import { TextInput,View,view } from "react-native";
import React  from "react";
import  styles from './searchBar.styles';

const SearchBar = (props) =>{
    return(
        <View style={styles.container}>
            <TextInput  placeholder="Ara.." onChangeText={props.onSearch}/>
        </View>
    )
}

export default SearchBar;
