import React from 'react';

import { SafeAreaView,Text,Button } from 'react-native';


function Second(props){

console.log(props);


const user = props.route.params.username;
    function navigatePage(){

        props.navigation.goBack();

    }
    return(
        <SafeAreaView>
        <Text>
            Hello Second
        </Text>
        <Text>
          {user}
        </Text>
        <Button title='Back To First' onPress={navigatePage}></Button>
    </SafeAreaView>
    )
}


export default Second;