import { Text, StyleSheet, View } from 'react-native'



const styles = StyleSheet.create({
    element:{
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 15,
    marginVertical: 8,
    
  },
    object1:{
        backgroundColor: '#50cdeb',
        borderRadius: 15,
        width: 45,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 15,
      },
      object2:{
        backgroundColor: '#4fee46',
        borderRadius: 15,
        width: 45,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 15,
      },
      text:{
        fontWeight: 'bold',
        color: 'white',
      },
      text2:{
        paddingVertical: 10,
        
        
    
      }
})

export default styles
