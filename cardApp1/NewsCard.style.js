import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({

    container:{
        backgroundColor: 'white',
       margin: 10,
       borderRadius: 10,

    },
    title:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 10
    },
    image:{height:Dimensions.get('window').height /4, borderTopLeftRadius:10,borderTopRightRadius:10,borderBottomLeftRadius:10,borderBottomRightRadius:10},
    description:{
        padding: 10,
        color: 'black',
        fontSize: 15,
    },
    author:{
        fontStyle: "italic",
        textAlign:"right",
        padding:3,
        color: 'black',
    },
  

})