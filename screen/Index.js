import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Header from '../components/Header';


const index = (props) => (
    <SafeAreaView style={{flex: 1}}>
        <Header title='Home' data={props}/>
        <Text>Welcome to GoKada</Text>
    </SafeAreaView>
)

export default index;