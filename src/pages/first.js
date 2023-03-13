import React from 'react';
import {View,Text, SafeAreaView,Button,StyleSheet} from 'react-native';



function First(props){
    console.log(props);

    function navigateToPage(){
        props.navigation.navigate('Second',{username: 'Harun'})

    }

    return(
        <SafeAreaView>
            <Text>
                Hello First
            </Text>
            <Button title='Go To Second' onPress={navigateToPage} ></Button>
        </SafeAreaView>
    )

}





export default First;