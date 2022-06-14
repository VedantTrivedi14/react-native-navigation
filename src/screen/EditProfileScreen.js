import React,{useState} from 'react';
import {View, Text,StyleSheet,TextInput,ScrollView,Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons } from '@expo/vector-icons';
import DatePicker from 'react-native-datepicker';
import RadioGroup from 'react-native-radio-buttons-group';
import DropdownComponent from '../components/DropdownComponent';

const radioButtonData = [
    { id:1, label:"Male", value:"Male"},
    { id:2, label:"Female", value:"Female"},
]

const EditProfileScreen =() => {
    const [radioButon,setRadioButton] = useState(radioButtonData)
    const [country, setCountry] = useState("")
    const [birthdate, setBirthdate] = useState("01-01-2000")
    return(
        <ScrollView style={{backgroundColor:"#e2e2e2"}}>
        <View style={styles.container}>
             
            <View style={styles.itemView}>
                <Ionicons name="person" size={20} color = {"#445773"} style={styles.icon}/>
                <TextInput style={styles.textInput} placeholder='Name' value='Emma Watson' keyboardType='name-phone-pad' />
            </View>
            <View style={styles.itemView}>
                <Icon name="phone" size={20} color = {"#445773"} style={styles.icon}/>
                <TextInput style={styles.textInput} placeholder='Contact no.' value='+91 6988537549' keyboardType='number-pad' />
            </View>
            <View style={styles.itemView}>
                <Icons name="email" size={20} color = {"#445773"} style={styles.icon}/>
                <TextInput style={styles.textInput} placeholder='Email address' value='abc@yahoo.com'  keyboardType='email-address'/>
            </View>
            <View style={styles.itemView}>
                <Icon name="home" size={20} color = {"#445773"} style={styles.icon}/>
                <TextInput style={styles.textInput} placeholder='Address' value="abc Buillding, bharatnagar" keyboardType='name-phone-pad' multiline={true} />
            </View>
            <View style={styles.itemView}>
                <Icon name="calendar" size={20} color = {"#445773"} style={styles.icon}/>
                <DatePicker 
                    style={{width:'100%'}}
                    date={birthdate}
                    mode="date"
                    placeholder='Select birth date'
                    format='DD-MM-YYYY'
                    minDate={'01-01-1990'}
                    maxDate={'31-12-2050'}
                    confirmBtnText="Select"
                    cancelBtnText='Cancel'
                    showIcon={false}
                    customStyles={{        
                        dateInput: {
                            marginHorizontal: 20,
                            borderWidth:0,
                            borderBottomWidth:1,           
                            marginTop:10         
                            },
                        placeholderText:{
                            fontSize:18,
                            paddingBottom:0,
                            alignSelf:'flex-start',
                        },
                        dateText:{
                            color:'#445773',
                            fontSize:18,
                            alignSelf:'flex-start'                        
                        }
                            
                    }}
                    onDateChange={(event)=>setBirthdate(event)}
                />
            </View>
            <View style={styles.itemView}>
                <Ionicons name="person" size={20} color = {"#445773"} style={styles.icon}/>
                <RadioGroup
                    containerStyle={styles.radioButton}
                    radioButtons={radioButon}
                    onPress={(event)=>[setRadioButton(event)]}
                    layout='row'
                    selected='true'
                
                />
            </View>
            <View style = {styles.itemView}>
                <Icon name='flag' size={20} color={"#445773"} style={styles.icon}/>
                <DropdownComponent  country={country} setCountry={setCountry} />
            </View>

            <View style={styles.btnMainContainer}>
                    <View style={styles.buttonContainer}>
                        <Button
                            title="Edit"
                            color="#4b9cea"
                            onPress={() => onLoginClick()}
                        />
                    </View>
                </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1,
        alignItems:"stretch",
        margin:10,
        paddingBottom:20
    },
    itemView:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:20
    },
    icon:{
        
    },
    textInput:{
        alignSelf:'stretch',
        width:'85%',
        margin:20,
        fontSize:18,
        borderBottomWidth:0.8,
        color:'#445773'
    },
    radioButton:{
        margin:15,
        justifyContent:'flex-start',
        padding:10, 
        color:'#445773'
    },
    btnMainContainer: {
        width:'60%',
        alignSelf:'center',
     },
     buttonContainer: {
         marginTop: 60,
     },
})

export default EditProfileScreen;