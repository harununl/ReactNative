import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor: 'white',
        margin: 10,
        
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray',
        
        
    },
  body:{
        padding: 10,

    },
   title:{
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
        marginBottom: 3,
        color:'black',
        
    },
    text:{
        fontSize: 15,
        margin: 10,
        marginTop: 3,
        color:'black',
        
    },
    button_container:{
        backgroundColor: '#00C2FF',
        padding: 10,
        alignItems:'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius:10,

    },
    button_title:{
        fontWeight: 'bold',
        color: 'white',
        fontSize:20,
    }
})
