import React from 'react';
import {View, Text,FlatList,StyleSheet,Image} from 'react-native';

const cartData = [
    
        {
            id:1, 
            name:"POCO C31", 
            price:"11,999", 
            status:"Delivery by 5/05/2022",
            quantity:"1",
            image:`https://rukminim1.flixcart.com/image/416/416/ku4ezrk0/mobile/p/e/4/c31-mzb0a0jin-poco-original-imag7bzqxgdhgf2n.jpeg?q=70`
        },
        {
            id:2, 
            name:"SAMSUNG Galaxy F22", 
            price:"14,999", 
            status:"Delivery by 5/05/2022",
            quantity:"1",
            image:`https://rukminim1.flixcart.com/image/312/312/kqqykcw0/mobile/p/y/u/galaxy-f22-sm-e225fzkhins-samsung-original-imag4z99fagskjxd.jpeg?q=70`
        },
        {
            id:3, 
            name:"realme 8", 
            price:"16,999", 
            status:"Delivery by 10/05/2022",
            quantity:"1",
            image:`https://rukminim1.flixcart.com/image/416/416/kmmcrrk0/mobile/4/g/a/8-rmx3085-realme-original-imagfgpfdkyc29zc.jpeg?q=70`
        },
        {
            id:4, 
            name:"POCO M3 Pro 5G ", 
            price:"15,999", 
            status:"Out of Stock",
            quantity:"1",
            image:`https://rukminim1.flixcart.com/image/416/416/kpmy8i80/mobile/q/z/z/m3-pro-5g-mzb0952in-poco-original-imag3th6btkchjn2.jpeg?q=70`
        },
        {
            id:5, 
            name:"vivo T1 5G", 
            price:"20,990", 
            status:"Delivery by 5/05/2022",
            quantity:"1",
            image:`https://rukminim1.flixcart.com/image/416/416/kzd147k0/mobile/z/9/h/-original-imagbe5qnquhuude.jpeg?q=70`
        }
    
]

const CartItem = (props) => (
    <View style={styles.itemView}>
        <Image  source={ {uri : props.image} } style={styles.image}/>
        <View style={styles.detailsView}>
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.price}>₹{props.price}</Text>
            <View style={{flexDirection:'row'}}>
                <Text style={{fontWeight:'bold'}}>Quantity: </Text>
                <Text>{props.quantity}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={{fontWeight:'bold'}}>Status: </Text>
                <Text>{props.status}</Text>
                
            </View>
        </View>
        
    </View>
)
const CartScreen = () => {
    const renderItem = ({item}) => (
        <CartItem
            name={item.name} 
            price = {item.price} 
            image={item.image}
            status={item.status}
            quantity={item.quantity}
        />
    );
    return(
        <FlatList
            style={{marginTop:10}}
            data={cartData}
            renderItem={renderItem}
            keyExtractor={item=>item.id}    
        />
    )
}
const styles = StyleSheet.create({
    itemView:{
        backgroundColor:'white',
        flexDirection:'row',
        borderWidth:0.8,
        elevation:5,
        borderColor:'#e2e2e2',
        borderRadius:7,
        marginHorizontal:10,
        marginBottom:10,
        padding:5
    },
    image:{
        width:"20%",
        height:"70%",
        alignSelf:'center',
        resizeMode:'contain',
        aspectRatio:1
    },
    detailsView:{
        paddingHorizontal:15,
        paddingVertical:5
    },
    name:{
        color:'#435986',
        fontWeight:'bold',
        fontSize:17
    },
    price:{
        fontSize:18,
        color:'#435986'
    }
})
export default CartScreen;