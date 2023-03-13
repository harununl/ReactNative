import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

import Profile from './profile';
import Member from './Member';
import MemberDetail from "./member.detail";
import MemberUpdate from "./memberUpdate";


const MemberStack = () =>{
    return(
        <Stack.Navigator>
        <Stack.Screen name="MemberScreen" component={Member} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="MemberDetail" component={MemberDetail}  options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="MemberUpdate" component={MemberUpdate}  options={{headerShown: false}}></Stack.Screen>
    </Stack.Navigator>
    )
   
}


function App(){
    return(
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Member" component={MemberStack}></Tab.Screen>
            <Tab.Screen name="Profile" component={Profile}></Tab.Screen>
          </Tab.Navigator>
        </NavigationContainer>



    )
}


export default App;