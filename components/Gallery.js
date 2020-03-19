import React, {useEffect} from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import PhotoRow from './PhotoRow';
import {useSelector, useDispatch} from 'react-redux';
import {fetchPhotos} from '../reducer/actions/gallery'
import {changePictureUri} from '../reducer/actions/picture'

export default function Gallery({ navigation }) {

    
    const galleryReducer = useSelector(state => state.galleryReducer)
    const photos = galleryReducer.gallery;
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchPhotos());
    }, []);
    
    const handlePress = (photo) => { 
        console.log(photo.fullImg); 
        dispatch(changePictureUri(photo.fullImg)); 
        navigation.navigate('Picture');
    }

    if (galleryReducer.loading) {
        return (
            <View style={styles.message}>            
                <Text>Loading...</Text>
            </View>
        )
    } else if(galleryReducer.error) {
        return (
            <View style={styles.message}>            
                <Text>Error. Photos are not loaded.</Text>
            </View>
        )
    }

    return (
        
        <View>            
            <FlatList
                data={photos}            
                renderItem={({item}) => <PhotoRow 
                                            details={item}
                                            handlePress = {handlePress}                                            
                                        />}
                
            />
        </View>
        
    )
}

const styles = StyleSheet.create({
    message: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})