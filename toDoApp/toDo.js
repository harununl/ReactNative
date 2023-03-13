import React,{useState,useEffect} from 'react';
import {View,Text,StyleSheet,FlatList, TouchableOpacity} from 'react-native';
import Input from './inputBar';
import styles from './toDoStyle';




function app(){
    
  
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const activeTodos = todos.filter(todo => !todo.isDone);

  const renderTodo = ({item}) => (
    <TodoList todos={item} isDone={isDone} deleteTodo={deleteTodo} />
  );
  
  const addTodo = () => {
    console.log('addTodo : ' + text);

    setTodos([...todos, {
      id: Date.now() + Math.random(),
      name: text,
      isDone: false
    }]);

    setText('');
  };

  const add =()=>{

    setTodos([...'text',todos])


  }
  

   const [HelloFlag,setHelloFlag]=useState(true);
   function updateFlag(){
     setHelloFlag(!HelloFlag);
     setCounter(counter-1);
   }

   

return(

  
  <View style={styles.outerContainer}>
      <View style={styles.container}>
      <Text style={styles.title}>
            Yapılacaklar
        </Text>
        <Text style={styles.title}>
           {activeTodos.length}
        </Text>
      </View>

      <View>
      <FlatList data={todos} renderItem={renderTodo} />
      </View>


      {/* <TouchableOpacity >
        <Text>
         
        </Text>
      </TouchableOpacity> */}

<Input text={text} setText={setText} onClick={addTodo} />

  </View>
    
       

 
 
   
   
   


  
)
}



export default app;

const innerStyles = StyleSheet.create({
    text:{
        backgroundColor: '#a2c11c',
        borderRadius: 5,
        padding: 10,
        margin: 5,
        color: 'white',
        fontSize: 15,
       // textDecorationLine: 'line-through'
        

    },
    offText:{
        backgroundColor: '#596e79',
        borderRadius: 5,
        padding: 10,
        margin: 5,
        
        fontSize: 15,
        textDecorationLine: 'line-through'
        

    }
})