import React from 'react';
import {Image, View, Text} from 'react-native';
import {useSelector} from 'react-redux';

export default function Picture () {
    const url = useSelector(state => state.pictureReducer)
    
    return(
        
        <Image
            source={{uri: url}}
            style={{ width: '100%', height: '100%', resizeMode: 'contain'}}
        />        
    )
}