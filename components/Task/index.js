import React from 'react'
import { View, Text , TouchableOpacity} from 'react-native'
import styles from './style'
const Task = () => {
    return (
        <View>
            <TouchableOpacity>
      <View style ={styles.element}>
        <View style = {styles.object1}><Text style={styles.text}>01</Text></View>
        <Text style={styles.text2}> Cillum tempor aute sint elit. </Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style ={styles.element}>
        <View style = {styles.object2}><Text style={styles.text}>02</Text></View>
        <Text style={styles.text2}> Cillum tempor aute sint elit. </Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style ={styles.element}>
        <View style = {styles.object1}><Text style={styles.text}>03</Text></View>
        <Text style={styles.text2}> Cillum tempor aute sint elit. </Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style ={styles.element}>
        <View style = {styles.object2}><Text style={styles.text}>04</Text></View>
        <Text style={styles.text2}> Cillum tempor aute sint elit. </Text>
        
      </View>
      </TouchableOpacity>
        </View>
    )
}

export default Task
