import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Card from '../components/Card';


const HomeScreen = () => {
    return(
        
        <View style={styles.container}>
            <Card/>
        </View>
       
    )
       
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        flexDirection:'column',
    },
    heading:{
        fontSize:20,
        backgroundColor:'#abcdef',
        margin:'5%',
        padding:10,
        color:'white'
    }
})
export default HomeScreen;