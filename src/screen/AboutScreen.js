import React from 'react';
import {View,Text, useWindowDimensions} from 'react-native';
import RenderHTML from 'react-native-render-html';

const htmlSource = {
    html : `
    <div>
        <h1>Welcom to HTML static page! </h1>
        <p>This is some text.</p>
        <hr>

        <h2>This is navigation assignment demo</h2>
        <p>This is some other text.</p>
        <hr>

        <h2 style="text-align:center;">This is About screen</h2>
        <p>This is some other text.</p>
    </div>
    `
}
const tagStyle = {
    div:{
        margin:20
    },
    h1 : {
        color:'#441133', 
    },
    hr:{
        color:'grey'
    },
    h2:{
        color:"#559932",
    },
    p:{
        color:"#220099",
        fontSize:20,
        fontWeight:'bold'
    }
}
const AboutScreen = () => {

    const width1 = useWindowDimensions().width;

    return(
        <RenderHTML 
            contentwidth={width1}
            source={htmlSource}
            tagsStyles={tagStyle}
        />
    )
}

export default AboutScreen;