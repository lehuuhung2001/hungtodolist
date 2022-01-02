import { Text, StyleSheet, View } from 'react-native'


const styles = StyleSheet.create({
    bottom:{
        flexDirection: 'row',
        
        
      },
    frame: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        height: 40,
        width: '85%',
        marginLeft: 8,
        borderRadius: 10,
        borderWidth: 5,
        borderStyle: 'solid',
        borderColor: 'green',
        

    },
    icon:{
        justifyContent :'center',
        alignItems : 'center',
        backgroundColor: '#50cdeb',
        height: 40,
        width:40,
        marginHorizontal: 10,
        borderRadius: 45,
        
        

        

    },
    iconText: {
        fontSize: 30,
        fontWeight: 'bold',
        color : 'white',
        alignContent: 'center',

    }
})



export default styles
