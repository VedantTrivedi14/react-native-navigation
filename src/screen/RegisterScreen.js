import React,{useState,useEffect} from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';


const RegisterScreen =( props ) => {
    const [form, setForm] = useState()
    useEffect(()=>{
        generateForm();
    },[])
    const generateForm= () => {
        setForm((old)=>({
            name:"",
            contact:"",
            age:"",
            email:"",
            password:""
        }))
    }

    const handleOnChange = (name,event) => {
        setForm((old)=>({
            ...old,
            [name] : event
        }))
    }

    const isValidForm = () => {
        let isValid;
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        Object.keys(form).map((field)=>{
            switch(field){
                
                case 'contact':
                    if(!!form[field] && (form[field].toString().length == 10) && !isNaN(form[field])) {
                      isValid = true;
                    }else{
                        isValid = false;
                    }  
                    break;
                case 'name':
                    if(!(form[field].toString().trim())){
                        isValid = true;
                    }else{
                        isValid = false;
                    }
                    break;
                case 'age':
                    if(!!form[field] && !isNaN(form[field])){
                        isValid = true;
                    }else{
                        isValid = false;
                    }
                    break;
                case 'email':
                    if(!!form[field] && pattern.test(form[field])){
                        isValid =true;
                    }
                    else{
                        isValid = false;
                    }
                    break;
                case 'password':
                    if(!!form[field] && (form[field].toString().length >=6)){
                        isValid = true;
                    }else{
                        isValid = false
                    }              
            }
        })

        if(isValid){
            return true;
        }else {
            return false;
        }
    }
 
    function onRegisterClick(){
       let isValid = isValidForm()
        if(isValid){
            alert("Success")
        
            props.navigation.navigate("Login",{
                email : form['email'],
                password : form['password']
            });
        }else{
            alert("Invalid Data")
        }
    }   
    return(
        <View style={styles.inputView}>
            <TextInput 
                style={styles.input} 
                placeholder='Name' 
                keyboardType='name-phone-pad'
                onChangeText={(event)=>handleOnChange('name',event)}
            />
            <TextInput 
                style={styles.input} 
                placeholder='Contact no.' 
                keyboardType='numeric'
                onChangeText={(event)=>handleOnChange('contact',event)}
            />
            <TextInput 
                style={styles.input} 
                placeholder='Age' 
                keyboardType='numeric'
                onChangeText={(event)=>handleOnChange('age',event)}
            />
            <TextInput 
                style={styles.input} 
                placeholder='Email id' 
                keyboardType='email-address'
                onChangeText={(event)=>handleOnChange('email',event)}
            />
            <TextInput 
                style={styles.input} 
                placeholder='Password' 
                keyboardType='visible-password'
                onChangeText={(event)=>handleOnChange('password',event)}
            />
            
            <View style={styles.btnMainContainer}>
                    <View style={styles.buttonContainer}>
                        <Button
                            title="Register"
                            color="#4b9cea"
                            onPress={()=>onRegisterClick()}
                        />
                    </View>
                </View>
            
        </View>
    )
};

const styles = StyleSheet.create({
    title:{
        backgroundColor:"grey",
        fontSize:25,
        textAlign:'center',
        paddingVertical:'5%'
    },
    inputView:{
      
        paddingBottom:'30%',
        paddingTop:'15%',
        alignItems:'center'
    },
    input:{
        marginBottom:'5%',
        padding:'3%',
        paddingLeft:20,
        width:'85%',
        borderColor:'black',
        borderWidth:1.5,
        borderRadius:15,
        borderColor:'grey',
        fontSize:18,
        
    },
    btnMainContainer: {
        width:'80%',
        
     },
     buttonContainer: {
         margin: 20,
     },
})

export default RegisterScreen;
