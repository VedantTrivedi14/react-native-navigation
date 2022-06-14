import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity  } from 'react-native';

const LoginScreen = ({route,navigation}) => {
   
    const [loginForm, setLoginForm] = useState()

    useEffect(()=>{
        generateForm()
    },[])

    const generateForm= () => {
        setLoginForm((old)=>({
            email:"",
            password:""
        }))
    }

    const handleOnChange = (name,event) => {
        setLoginForm((old)=>({
            ...old,
            [name] : event
        }))
    }

    const isValidForm = () => {
        let isValid;

        Object.keys(loginForm).map((field)=>{
            switch(field){
                case 'email':
                    if(route?.params?.email === loginForm[field]){   
                        isValid =true;
                    }
                    else{
                        isValid = false;
                    }
                    break;
                case 'password':
                        if(route?.params?.password === loginForm[field]){
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

    function onLoginClick(){
        console.log(route?.params?.email)
        if(route?.params?.email === undefined || route?.params?.password === undefined)
        {
            alert("User not registered. Please register!")
        }else{
            let isValid = isValidForm()
            
            if(isValid){
                navigation.navigate("Tabs");
            }else{
                alert("Invalid Data")
            }
        }
         
     }   

    function forgetPasswordClick(){
        navigation.navigate("Forget Password",{
            email : loginForm['email']
        })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <View style={styles.inputView}>
                <TextInput 
                    style={styles.inputEmail} 
                    placeholder='Enter email' 
                    keyboardType='email-address'
                    onChangeText={(event) => handleOnChange('email',event)}
                />
                <TextInput 
                    style={styles.inputPassword} 
                    placeholder='Enter password' 
                    keyboardType='visible-password'
                    onChangeText={(event) => handleOnChange('password',event)}
                />
                <TouchableOpacity
                    onPress={() => forgetPasswordClick()}>
                        
                    <Text style={styles.forgetPassword}>Forget password?</Text>
                   
                </TouchableOpacity>
                <View style={styles.btnMainContainer}>
                    <View style={styles.buttonContainer}>
                        <Button
                            title="Login"
                            color="#4b9cea"
                            onPress={() => onLoginClick()}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.textView}>
                <Text style={styles.footerText}>Don't have account?</Text>
                <TouchableOpacity
                onPress={()=>navigation.navigate("Register")}>
                    <Text style={styles.textRegister}>Register Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
       
        alignItems:'stretch',
        justifyContent:'space-evenly'
    },
    title:{
        backgroundColor:"grey",
        fontSize:25,
        textAlign:'center',
        paddingVertical:'5%'
    },
    inputView:{
       
        paddingBottom:'30%',
        paddingTop:'50%',
        alignItems:'center'
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
    forgetPassword:{
        textAlign:'right',
        paddingRight:'12%',
        fontSize:14,
        marginBottom:'5%',
        color:'grey'

    },    
    btnMainContainer: {
       width:'80%'
    },
    buttonContainer: {
        margin: 20,
    },
    textView:{
        alignItems:'center',
        marginVertical:'8%'
    },
    footerText:{
        fontWeight:'100',
        opacity:3,
        color:'#abafb6'
    },
    textRegister:{
        fontWeight:'bold',
        
    }

})

export default LoginScreen;