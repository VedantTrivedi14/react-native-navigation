import React from 'react';
import {View, Text,ScrollView,Image,StyleSheet,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen =({navigation}) => {

   React.useLayoutEffect(()=>{
       navigation.setOptions({
           headerRight:()=>(
               <TouchableOpacity onPress={() => navigation.navigate("Edit Profile")}>
                <Ionicons name='create' color={'#4b9cea'} size={30} style={styles.editButton}/>
                </TouchableOpacity>
           ),
       });
   },[navigation])
    
    return(
            <ScrollView style={styles.container}>
            <View >
                <Image style={styles.profileImage} source={require('../../assets/user-profile.png')}/>
                <Text style = {styles.name}>john martin</Text>
                <View style={styles.divider}/>
                <View style={styles.fieldView}>
                    <Icon name="calendar" color={'grey'} size={18} style={styles.icon}/>
                    <Text style={styles.data}>01-01-2000</Text>
                </View>
                <View style={styles.fieldView}>
                    <Ionicons name="person" color={'grey'} size={18} style={styles.icon}/>
                    <Text style={styles.data}>male</Text>
                </View>
                <View style={styles.fieldView}>
                    <Icon name="phone" color={'grey'} size={18} style={styles.icon}/>
                    <Text style={styles.data}>+91 9888337749</Text>
                </View>
                <View style={styles.fieldView}>
                    <Icons name="email" color={'grey'} size={18} style={styles.icon}/>
                    <Text style={styles.data}>abc@yahoo.com</Text>
                </View>
                <View style={styles.fieldView}>
                    <Icon name="home" color={'grey'} size={18} style={styles.icon}/>
                    <Text style={styles.data}>abc Buillding, bharatnagar</Text>
                </View>
                <View style={styles.fieldView}>
                    <Icon name="flag" color={'grey'} size={18} style={styles.icon}/>
                    <Text style={styles.data}>Indian</Text>
                </View>
                <View style={styles.fieldView}>
                    <Icon name="book" color={'grey'} size={18} style={styles.icon}/>
                    <Text style={styles.data}>Computer Engineer</Text>
                </View>
                
            </View>
           
        </ScrollView>
    ) 
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        margin:'2%',
        backgroundColor:'white'
    },
    profileImage:{
        width:90,
        height:90,
        borderRadius:90/2,
        alignSelf:'center',
        margin:10

    },
    name:{
        alignSelf:"center",
        fontSize:20,
        fontWeight:'700',
        padding:10,
        color:'#668899'
    },
    divider:{
        height:2, 
        backgroundColor:'#d4d7d7',
        marginBottom:10,
        marginHorizontal:10
        
    },
    fieldView:{
        flexDirection:'row',
        justifyContent:"flex-start",
        marginHorizontal:20,
        
    },
    icon:{
        padding:10,
        
    },
    data:{
        fontSize:18,
        color:'#668899', 
        alignSelf:'center',
        paddingLeft:10
    },
    editButton:{
        marginRight:10
    }
})
export default ProfileScreen;