import React from 'react';
import {View, FlatList,StyleSheet,Text,TouchableOpacity} from 'react-native';

const data =[
    {
        id:1,
        title:"Privacy Policy",
        component : "Privacy Policy"
    },
    {
        id:2,
        title:"About",
        component : "About"
    }
]

const Item = ({title,component,navigation}) => (
    <TouchableOpacity
        onPress={()=>navigation.navigate(component)}
    >
        <View style={styles.itemContainer}>
            <Text style={styles.title}>{title}</Text>
        </View>
    </TouchableOpacity>
)

const SettingsScreen =({navigation}) => {

    const renderItem = ({ item }) => (
        <Item title={item.title} component = {item.component} navigation={navigation}/>
      );
    
    return(
        <View style={styles.container}>
           <FlatList 
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    itemContainer:{
        backgroundColor: '#abcdef',
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title:{
        fontSize: 20,
    }
})
export default SettingsScreen;