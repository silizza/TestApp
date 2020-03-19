import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Gallery from '../components/Gallery';
import Picture from '../components/Picture';

const screens = {
    Gallery: {
        screen: Gallery
    },
    Picture: {
        screen: Picture
    }
}

export const galleryStack = createStackNavigator(screens);
