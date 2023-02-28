import React, {useState,useEffect} from "react";

import { Text,View,SafeAreaView,Button } from "react-native";
import { counterEvent } from "react-native/Libraries/Performance/Systrace";


function app(){


    const [helloFlag, setHelloFlag] = useState(true);

    function updateFlag(){
        setHelloFlag(!helloFlag);
    }
   

   

   
   
    return(
        <SafeAreaView>
        <View>
            <Text style={{fontSize: 30}}>Hello Lifecycle</Text>
            {/* <Text style={{fontSize: 30}}>counter {counter}</Text> */}
            
            {/* <Button title="update number"  onPress={() => setNumber(number + 1)}></Button> */}
            <Button title="hide"  onPress={updateFlag}></Button>
            {helloFlag && <Hello/>}
        </View>
        </SafeAreaView>
       
    )
}

function Hello(){

    useEffect(() =>{
        console.log("hello..");

        return()=>{
                console.log("goodbye..")
            }
        
      },[]);
   
    return(
        <View>
            <Text style={{fontSize: 30,backgroundColor: 'aqua', margin: 10}}>Hello world</Text>
        </View>
    )



}

export default app;