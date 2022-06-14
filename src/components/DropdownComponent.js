import React,{useState,useEffect} from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import {View, StyleSheet} from 'react-native';

const data = [
    { label: 'India', value: 'Indea' },
    { label: 'Australia', value: 'Australia' },
    { label: 'UAE', value: 'UAE' },
    { label: 'Canada', value: 'Canada' },
    { label: 'china', value: 'china' },
    { label: 'Ireland', value: 'Ireland' },
    { label: 'katar', value: 'katar' },
    { label: 'Africa', value: 'Africa' },
  ];

const DropdownComponent =() => {
    const [isFocus, setIsFocus] = useState(false);
    const [country, setCountry] = useState("")
    useEffect(()=>{
      setCountry(country)
    },[])
    return(
        <View style={styles.container}>
            <Dropdown
              style={[styles.dropdown, isFocus && { borderColor: '#abcdef' }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={data}
              searh
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? 'Select country' : '...'}
              searchPlaceholder="Search..."
              value={"India"}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
          
             onChange={() => setCountry()} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      width:"95%",
    
    },
    dropdown: {
      height: 50,
      
      borderColor: 'gray',
      borderWidth: 0.8,
      marginHorizontal:15,
      
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });

export default DropdownComponent;