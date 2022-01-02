import React , {useState} from 'react'
import { View, Text ,Keyboard, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'

import styles from './style';

const Form = (props) => {
    const [task, setTask] = useState('')
    const handleAddTask = () => {
        if(task.length === 0){
            alert('Vui lòng nhập !')
            return false;
        }
        props.onAddTask(task);
        setTask('');
        Keyboard.dismiss();
    }
    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset = {8}
         style = {styles.bottom}>
            <TextInput 
            value ={task}
            onChangeText={(text) => setTask(text)}
            placeholder='  Typing here ' style = {styles.frame}> 
            </TextInput>
            <TouchableOpacity onPress={handleAddTask}>
            <View style = {styles.icon}><Text style = {styles.iconText}> + </Text></View>
            </TouchableOpacity>
            
            
            
        </KeyboardAvoidingView>
    )
}

export default Form
