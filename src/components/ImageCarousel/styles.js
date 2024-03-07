import {StyleSheet, Dimensions} from 'react-native';

import {colors} from '/Users/student/MobileApp/utils/colors.js';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
    image: {
        width: width,
        height: height * 0.45
    },
    list: {
    },
    paggination: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 50,
        alignSelf: 'center',
        alignItems: 'center',
    },
    pagginationLine: {
        height: 4,
        width: 20,
        borderRadius: 10,
        backgroundColor: colors.white,
        margin: 5
    },
    activeLine: {
        backgroundColor: colors.black,
        width: 30
    }
});