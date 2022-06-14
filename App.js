import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet,  TouchableOpacity  } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import LoginScreen from './src/screen/LoginScreen';
import RegisterScreen from './src/screen/RegisterScreen';
import ForgetPassword from './src/screen/ForgetPassword';
import HomeScreen from './src/screen/HomeScreen';
import ProfileScreen from './src/screen/ProfileScreen';
import EditProfileScreen from './src/screen/EditProfileScreen';
import SettingsScreen from './src/screen/SettingsScreen';
import PrivacyScreen from './src/screen/PrivacyScreen';
import AboutScreen from './src/screen/AboutScreen';
import ProductScreen from './src/screen/ProductScreen';
import OrderScreen from './src/screen/OrderScreen';
import CartScreen from './src/screen/CartScreen';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


function MyDrawer() {
  return (
    <Drawer.Navigator 
      style={{marginTop:40}}>
      <Drawer.Screen name="HomeScreen" component={Tabs} options={{ headerShown:false, drawerLabel:"Home"}}/>
      <Drawer.Screen name="Products" component={ProductScreen} />
      <Drawer.Screen name="Orders" component={OrderScreen} />
      <Drawer.Screen name="Cart" component={CartScreen} />
    </Drawer.Navigator>
  );
}

function SettingTab({navigation}) {
  return(
    <Stack.Navigator>
      <Stack.Screen 
        name="Settings Screen" 
        component={SettingsScreen} 
        options={{
            title:"Settings",
            headerLeft:()=>(
              <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                <Ionicons
                  style={{marginRight:13}}
                  type="ionicon"
                  name="menu"
                  size={24}
              />
          </TouchableOpacity>)}}/>
      <Stack.Screen name="Privacy Policy" component={PrivacyScreen}/>
      <Stack.Screen name='About' component={AboutScreen}/>
    </Stack.Navigator>
  )
}

function Tabs({navigation}) {
  return (
    <Tab.Navigator
    screenOptions={ ({route}) => ({
      tabBarIcon:({focused, color, size}) =>{
        let iconName;
        switch(route.name){
          case 'Home':
            {
              iconName = focused
              ? 'home'
              : 'home-outline';
              break;     
            }
          case "Profile":
            {
              iconName = focused ? 'person' : 'person-outline';
            }
            break;
          case "Edit Profile":
            {
              iconName = focused ? 'create' : 'create-outline';              
            }
            break;
          case "Settings":
            {
              iconName = focused ? 'settings' : 'settings-outline';
            }
          }
        return <Ionicons name={iconName} size={size} color = {color}/>;
      },
      tabBarActiveTintColor:'#4b9cea',
      tabBarInactiveTintColor:'grey',
      headerLeft:()=> (
        <TouchableOpacity
          onPress={()=>navigation.openDrawer()}>
          <Ionicons
            style={styles.icon}
            type="ionicon"
            name="menu"
            size={24}
          />
        </TouchableOpacity>
      ),
    })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen}/>
      <Tab.Screen name="Edit Profile" component={EditProfileScreen}/>
      <Tab.Screen name='Settings' component={SettingTab} options={{headerShown:false}}/>
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    
    <NavigationContainer> 
      
      <Stack.Navigator>
        
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen}/>
        <Stack.Screen name="Forget Password" component={ForgetPassword}/>
        <Stack.Screen name='Tabs' component={MyDrawer} options={{headerShown:false}}/>
      </Stack.Navigator>
      
    </NavigationContainer>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon:{
    marginLeft:15
  }
});
