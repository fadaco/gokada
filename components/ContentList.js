import React from 'react';
import {View, Text} from 'react-native';
import {List, Avatar} from 'react-native-paper';

const ContentList = ({name, phone, username, website}) => {
    return(
    <List.Item title={name} description={() => <View>
        <Text>{'Phone: ' + phone}</Text>
        <Text>{'Website: ' + website}</Text>
    </View>}
    left={() => <Avatar.Text size={24} label={username.charAt(0) + username.charAt(1).toUpperCase()}/>}/>
)}

export default ContentList;