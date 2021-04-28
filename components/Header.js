import React from 'react';
import {Appbar} from 'react-native-paper'

const Header = (props) =>  (
    <Appbar.Header>
       <Appbar.Action icon="menu" onPress={props.data.navigation.openDrawer} />
        <Appbar.Content title={props.title}/>
    </Appbar.Header>
)

export default Header;