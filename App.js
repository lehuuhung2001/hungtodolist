import React from 'react'
import { StyleSheet, Text, View,ScrollView,TouchableOpacity, ImagePickerIOS } from 'react-native'
import Task from './components/Task'
import styles from './.expo/Container.style'
import Form from './components/Form'
import { useState } from 'react'
const App = () => {
  const [taskList, setTaskList] = useState([])
  const handleAddTask = (task) => {
    // alert(task);
    setTaskList([...taskList,task]);
  }
  return (
    <View style={styles.container}>
      <Text style = {{fontWeight: 'bold',fontSize: 20,color: '#449ecb'}}>Todo List</Text>
      <ScrollView>
      {
        taskList.map((item,index) => {
          return <Task/>
        })
      }
      <Task></Task>
      </ScrollView>
      <Form onAddTask = {handleAddTask}/>
      
      
    </View>
  )
}

export default App

