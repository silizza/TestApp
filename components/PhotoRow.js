import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function PhotoRow ({details, handlePress}) {
    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={() => handlePress(details)}  
        >
            <View>
                <Image 
                source={{uri: details.icon}}
                style={{ height: 70, width: 70, resizeMode: 'contain'}}
                />
            </View>
            <View style={styles.description}>
                <Text>{details.name}</Text>
                <Text style={{fontStyle: 'italic'}}>Author: {details.author}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {  
        flexDirection: 'row',            
        justifyContent: 'flex-start',
        padding: 5, 
        width: '80%'   
      
    },
    description: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 5,        
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: 'gray'

    }
})