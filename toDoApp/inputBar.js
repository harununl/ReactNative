import React,{useState,useEffect} from "react";
import { Text, TextInput,TouchableOpacity,TurboModuleRegistry,View } from "react-native";
import styles from './inputBarStyle'



const Input = ({ text, setText, addTodo }) =>{

    const [button,setButton] = useState(true)

    // const setText = (word) =>{

    //     if(word != ''){
    //         setButton(false);
    //     }
    //     else{
    //         setButton(true);
    //     }


    // }


    const handleChange = (word) => {
        //setText(word);
        if (word !== '') {
            setButton(true);
        } else {
            setButton(false);
        }
    };

    return(
     <View style={styles.container} > 
      <TextInput  placeholder="Yapılacak..." onChangeText={handleChange} value={text}/>
      
   
     <TouchableOpacity onPress={addTodo} style={button ?   styles.button : styles.noActiveButton} disabled={button}>
        <Text style={styles.text}>
            Kaydet
        </Text>
     </TouchableOpacity>
  

    </View>
   


    )



};


export default Input;


