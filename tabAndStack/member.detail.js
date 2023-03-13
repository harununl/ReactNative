import React from "react";
import { View,Text,Button } from "react-native";

function MemberDetail(props){


    function goUpdate(){

        props.navigation.navigate('MemberUpdate')
    }




    return(
        <View>
            <Text>
            MemberDetail 
            </Text>
            <Button title="go member update" onPress={goUpdate}></Button>
        </View> 
    )
}

export default MemberDetail;
