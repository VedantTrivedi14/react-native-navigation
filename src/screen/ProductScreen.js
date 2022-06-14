import React from 'react';
import {View, Text, FlatList,Image,StyleSheet} from 'react-native';
import { withDecay } from 'react-native-reanimated';


const products = [ 
    {
        id:1, name:"POCO C31", price:"10,999", image:`https://rukminim1.flixcart.com/image/416/416/ku4ezrk0/mobile/p/e/4/c31-mzb0a0jin-poco-original-imag7bzqxgdhgf2n.jpeg?q=70`
    },
    {
        id:2, name:"SAMSUNG Galaxy F22", price:"15,999", image:`https://rukminim1.flixcart.com/image/312/312/kqqykcw0/mobile/p/y/u/galaxy-f22-sm-e225fzkhins-samsung-original-imag4z99fagskjxd.jpeg?q=70`
    },
    {
        id:3, name:"realme 8", price:"13,999", image:`https://rukminim1.flixcart.com/image/416/416/kmmcrrk0/mobile/4/g/a/8-rmx3085-realme-original-imagfgpfdkyc29zc.jpeg?q=70`
    },
   
    {
        id:4, name:"vivo T1 5G", price:"22,990", image:`https://rukminim1.flixcart.com/image/416/416/kzd147k0/mobile/z/9/h/-original-imagbe5qnquhuude.jpeg?q=70`
    },
    {
        id:5, name:"Infinix Note 11", price:"15,999", image:`https://rukminim1.flixcart.com/image/416/416/kx25ksw0/mobile/4/v/5/-original-imag9hgmbb5rntyg.jpeg?q=70`
    },
    {
        id:6, name:"POCO M3 Pro 5G ", price:"12,999", image:`https://rukminim1.flixcart.com/image/416/416/kpmy8i80/mobile/q/z/z/m3-pro-5g-mzb0952in-poco-original-imag3th6btkchjn2.jpeg?q=70`
    },
    {
        id:7, name:"realme C21Y ", price:"14,599", image:`https://rukminim1.flixcart.com/image/416/416/ksnjp8w0/mobile/k/o/m/c21y-rmx3261-realme-original-imag65kcytrk8dtr.jpeg?q=70`
    },
    {
        id:8, name:"realme 9i", price:"14,999", image:`https://rukminim1.flixcart.com/image/416/416/ky90scw0/mobile/s/5/d/-original-imagagnfgh6ed7tp.jpeg?q=70`
    },
    {
        id:9, name:"realme C25Y", price:"10,999", image:"https://rukminim1.flixcart.com/image/416/416/ktlu9ow0/mobile/p/c/u/c25y-rmx3265-realme-original-imag6wmjczbfhk4w.jpeg?q=70"
    },
    {
        id:10, name:"MOTOROLA G60", price:"23,999", image:`https://rukminim1.flixcart.com/image/416/416/l0o6nbk0/mobile/j/w/k/-original-imagceuvb2qasggx.jpeg?q=70`
    },
    {
        id:11, name:"REDMI 10", price:"16,999", image:"https://rukminim1.flixcart.com/image/416/416/l0tweq80/mobile/d/d/s/-original-imagcgtgyqebxqhx.jpeg?q=70"
    },
    {
        id:12, name:"REDMI Note 10T 5G ", price:"19,999", image:`https://rukminim1.flixcart.com/image/416/416/l0igvww0/mobile/y/j/4/-original-imagcaaw4d7bv7pj.jpeg?q=70`
    },
]
const Item = ({name,price,image}) => (
    <View style={styles.itemView}>
         <Image source={ {uri:image} } style={styles.image}/>
         <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>₹{price}</Text>
     </View>
)

const ProductScreen = () => {

    const renderItem = ({item}) => (
        <Item name={item.name} price = {item.price} image={item.image}/>
    );
    return(
        <View style={styles.container}>
            <FlatList
                data={products}    
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:10
    },
    itemView:{
        borderWidth:0.8,
        elevation:2,
        borderColor:'#abcdef',
        borderRadius:7,
        width:'45%',
        marginHorizontal:"2%",
        backgroundColor:'white',
        padding:10,
        marginBottom:10
       
    },
    image:{
        marginBottom:5,
        resizeMode:'contain',
        aspectRatio:1
    },
    name:{
        fontWeight:'bold',

    },
    price:{
        fontSize:15
    }
})
export default ProductScreen;