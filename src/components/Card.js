import React from 'react';
import {View, StyleSheet} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import CarouselCardItem,{SLIDER_WIDTH , ITEM_WIDTH} from './CardItem';


data = [
    { title: "Screen 1"},
    { title: "Screen 2"},
    { title: "Screen 3"},
    { title: "Screen 4"},
    { title: "Screen 5"}
]
const CarouselCard = () =>{
    const [index, setIndex] = React.useState(0)
    const isCarousel = React.useRef(null)
    return(
        <View style={styles.carousel}>
            <Carousel
                data={data}
                renderItem={CarouselCardItem}
                layout='tinder'
                layoutCardOffset={2}
                itemWidth={ITEM_WIDTH}
                sliderWidth = {SLIDER_WIDTH}
                inactiveSlideShift= {0}
                useScrollView={true}
                ref={isCarousel}
            />
            
            <Pagination
                dotsLength={data.length}
                activeDotIndex={index}
                carouselRef={isCarousel}
                dotStyle={{
                    width:8,
                    height: 8,
                    borderRadius: 5,
                    backgroundColor: 'rgba(0, 0, 0, 0.80)'
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                tappableDots={true}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    carousel:{
        height:'100%',
        
    }
})
export default CarouselCard;