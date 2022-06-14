import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image,FlatList } from "react-native"

export const SLIDER_WIDTH = Dimensions.get('window').width
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.98)


const gridtData = [
    
  {
      id:1, 
      name:"POCO C31", 
      image:`https://rukminim1.flixcart.com/image/416/416/ku4ezrk0/mobile/p/e/4/c31-mzb0a0jin-poco-original-imag7bzqxgdhgf2n.jpeg?q=70`
  },
  {
      id:2, 
      name:"SAMSUNG Galaxy F22", 
      image:`https://rukminim1.flixcart.com/image/312/312/kqqykcw0/mobile/p/y/u/galaxy-f22-sm-e225fzkhins-samsung-original-imag4z99fagskjxd.jpeg?q=70`
  },
  {
      id:3, 
      name:"realme 8", 
      image:`https://rukminim1.flixcart.com/image/416/416/kmmcrrk0/mobile/4/g/a/8-rmx3085-realme-original-imagfgpfdkyc29zc.jpeg?q=70`
  },
  {
      id:4, 
      name:"POCO M3 Pro 5G ",
      image:`https://rukminim1.flixcart.com/image/416/416/kpmy8i80/mobile/q/z/z/m3-pro-5g-mzb0952in-poco-original-imag3th6btkchjn2.jpeg?q=70`
  },
  {
    id:5, name:"MOTOROLA G60", image:`https://rukminim1.flixcart.com/image/416/416/l0o6nbk0/mobile/j/w/k/-original-imagceuvb2qasggx.jpeg?q=70`
},
{
    id:6, name:"REDMI 10", image:"https://rukminim1.flixcart.com/image/416/416/l0tweq80/mobile/d/d/s/-original-imagcgtgyqebxqhx.jpeg?q=70"
},
{
    id:7, name:"REDMI Note 10T 5G ", image:`https://rukminim1.flixcart.com/image/416/416/l0igvww0/mobile/y/j/4/-original-imagcaaw4d7bv7pj.jpeg?q=70`
},
{
    id:8, name:"vivo T1 5G", image:`https://rukminim1.flixcart.com/image/416/416/kzd147k0/mobile/z/9/h/-original-imagbe5qnquhuude.jpeg?q=70`
},
]

const CartItem = (props) => (
  <View style={styles.itemView}>
    <Image source={ {uri:props.image} } style={styles.image}/>
    <Text style={styles.name}>{props.name}</Text>
</View>
)

const CarouselCardItem = ({item}) => {
  const renderItem = ({item}) => (
    <CartItem
        name={item.name} 
        image={item.image}
    />
  );
  return(
    <View style={styles.container}>
      <Text style = {styles.title}>{item.title}</Text>
      <FlatList
        data={gridtData}    
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#e2e2e2',
        borderRadius: 3,
        borderWidth:1,
        borderColor:"#666666",
        width: ITEM_WIDTH,
        height:'100%',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        marginTop:20,
        paddingTop:10
      },
      title:{
        color:'red',
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center'
      },
    itemView:{
      backgroundColor:'white',
        borderRadius: 8,
        borderWidth:0.8,
        elevation:2,
        borderColor:'#e2e2e2',
        borderRadius:7,
        width:ITEM_WIDTH/2.2,
        marginHorizontal:"2%",
        padding:10,
        marginBottom:10
      
    },
    image:{
        marginBottom:10,
        resizeMode:'contain',
        aspectRatio:1
    },
    name:{
        fontWeight:'bold',
        
    },
})

export default CarouselCardItem;