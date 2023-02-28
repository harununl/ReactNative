import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex: 1,
    justifyContent: 'center',
    backgroundColor: '#eaeaea',
    margin: 5,
    alignItems: 'center',
    padding: 4,
    borderRadius: 10,
        
        
    },
    image:{
        resizeMode: 'stretch',
        width: Dimensions.get('window').width / 3,
        height: Dimensions.get('window').height / 4,
        backgroundColor: 'white',
        borderRadius: 10,
        
        
        
    },
    title:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign:"justify",
       marginLeft: 10,


    },
    instock:{
        fontSize: 15,
        color:'red',
        fontWeight: 'bold',
        margin: 5,


    },
    price:{
     margin: 10,

    }
    }
)