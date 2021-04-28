import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator} from '@react-navigation/drawer';
import Index from './Index';
import Content from './Content';

const Route = (props) => {
    const Stack = createStackNavigator();
    const Drawer = createDrawerNavigator();


    
    return (
       <Drawer.Navigator>
           <Drawer.Screen name="Home" children={Index}/>
           <Stack.Screen name={'Content'} component={Content}/>

       </Drawer.Navigator>
)
}

export default Route;