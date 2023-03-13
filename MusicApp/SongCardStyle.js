import { StyleSheet,Dimensions } from "react-native";


export default StyleSheet.create(
    {
        container:{

            flex: 1,
          
            padding: 20,



        },
        image:{

           width: 100,
           height: 100,
           borderRadius:50,

        },

        containerTitle:{

            flex: 1,
           marginLeft: 105,
           marginTop: -100,
            padding: 10,

        },
        containerArtist:{

            flex: 1,
           flexDirection: "row",
           marginTop: 10,

        },
        title:{
            fontWeight: 'bold',
            fontSize: 25,
            color: 'black',
        },
        artist:{
            fontWeight: 'bold',
            fontSize: 15,
            color: 'black',
        },
        containerisSold:{
          borderWidth: 1,
          borderColor: 'red',
          padding: 5,
          borderRadius: 5,
        
        },
        isSold:{
            color: 'red',
        },
        contentContainer:{
            flexDirection: 'row',
        }
       
       



    }
);
