import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '/Users/student/MobileApp/utils/colors.js';

const {width} = Dimensions.get('window')
console.log('width => ', width)

export const styles = StyleSheet.create({
    container: {
        marginHoriztonal: 24,
        paddingVertical: 16,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: colors.borderColor
    },
    title: {
        color: colors.textGray,
        paddingVertical: 8
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginRight: 20
    },
    price: {
        color: colors.black,
        paddingBottom: 8
    },
    content: {
        flex: 1
    },
    icon: {
        width: 24,
        height: 24,
    }
});