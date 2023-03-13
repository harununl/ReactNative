import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from './pages/welcome';
import Login from './pages/login';
import Show from "./pages/show";

const stack = createNativeStackNavigator();

function App(){
    return(
        <NavigationContainer>
        <stack.Navigator>
            <stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}}></stack.Screen>
            <stack.Screen name="Login" component={Login} options={{headerShown: false}}></stack.Screen>
            <stack.Screen name="Show" component={Show} options={{headerShown: false}}></stack.Screen>
            {/* <stack.Screen name="Show"></stack.Screen> */}
        </stack.Navigator>
        
    </NavigationContainer>
    )
   

}

export default App;