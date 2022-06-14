import React,{useState} from 'react';
import {ActivityIndicator} from 'react-native';
import WebView from 'react-native-webview';

const PrivacyScreen = () => {
    const [visible,setVisible] = useState(false)
    return(
        <>
        <WebView
                source={{uri:'https://www.tatvasoft.com/'}}
                onLoadStart={() => setVisible(true)}
                onLoadEnd={()=>setVisible(false)}
           
            />
        {visible && (
            <ActivityIndicator
                color={"#4b9cea"}    
                size='large'
                style={{
                    position:'absolute',
                    alignSelf:'center',
                    height:'100%'
                }}

            />
        )

        }
        </>  
        
    )
}

export default PrivacyScreen;