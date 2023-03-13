import React from "react";
import { View,Text,Button } from "react-native";

function Member(props){

    function goMember(){

        props.navigation.navigate('MemberDetail');
        
    }


    return(
        <View>
            <Text>
                Hello 
            </Text>
            <Button title="go member detail" onPress={goMember}></Button>
        </View> 
    )
}

export default Member;
