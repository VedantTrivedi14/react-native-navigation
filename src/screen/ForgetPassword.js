import React,{useEffect,useState} from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const ForgetPassword =({route}) => {

    const [forgetPasswordForm, setForgetPasswordForm] = useState()

    useEffect(() => {
        generateForm()
    },[])

    const generateForm = () => {
        setForgetPasswordForm((old)=>({
            email:"",
            newPassword:""
        }))
    }

    const handleOnChange = (name,event) => {
        setForgetPasswordForm((old) => ({
            ...old,
            [name] : event
        }))
    }

    const isValidEmail = () => {
        let isValidData
        Object.keys(forgetPasswordForm).map((field) => {
            switch(field){
                case 'email':
                    if(!!forgetPasswordForm[field] && (forgetPasswordForm[field] === route.params.email)){
                        isValidData = true;
                        console.log("Valid email")
                    }else{
                        isValidData = false;
                    }
                    break
                case 'newPassword':
                    if(!!forgetPasswordForm[field] && (forgetPasswordForm[field].toString().length >=6)){
                        isValidData = true;
                        console.log("Valid password")
                    }else{
                        isValidData = false;
                    }
            }
        })
        if(isValidData){
            return true;
        }else {
            return false;
        }
    }


    function setPasswordClick(){
        let isValid = isValidEmail()
         if(isValid){
            alert("Pasword Changed")
          
         }else{
            alert("Invalid Data")
         }
     }   
    return(
        <View style={styles.container}>
            <View style={styles.inputView}>
                <TextInput 
                    style={styles.inputEmail} 
                    placeholder='Enter email' 
                    keyboardType='email-address'
                    onChangeText={(event) => handleOnChange('email',event)}
                />
                <TextInput 
                    style={styles.inputPassword} 
                    placeholder='Enter new password' 
                    keyboardType='visible-password'
                    onChangeText={(event) => handleOnChange('newPassword', event)}
                />
                <View style={styles.btnMainContainer}>
                    <View style={styles.buttonContainer}>
                        <Button
                            title="Set new password "
                            color="#4b9cea"
                            onPress={()=>setPasswordClick()}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    container:{
       
        flex:1,
        
        alignItems:'stretch',
        justifyContent:'space-evenly'
    },
    inputView:{
       
        alignItems:'center',
        justifyContent:'center'
    },
    inputEmail:{
        marginBottom:'5%',
        padding:'3%',
        paddingLeft:20,
        width:'80%',
        borderColor:'black',
        borderWidth:1.5,
        borderRadius:30,
        borderColor:'grey',
        fontSize:18,
        
    },
    inputPassword:{
        padding:'3%',
        paddingLeft:20,
        width:'80%',
        borderColor:'black',
        borderWidth:1.5,
        borderRadius:30,
        borderColor:'grey',
        fontSize:18,
    },    
    btnMainContainer: {
       width:'80%'
    },
    buttonContainer: {
        margin: 20,
    },

 

})
export default ForgetPassword;
