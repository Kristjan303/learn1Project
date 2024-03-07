import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";


const {width} = Dimensions.get("window")
console.log(width)

export const styles = StyleSheet.create ({
    container: {
        margin: 8,
    },
    title: {
        paddingVertical: 8,
        color: colors.textGray,
    },
    image: {
        width: (width - 75)/ 2,
        height: 220,
        borderRadius: 8,
    },
    price: {
        color: colors.black,
        paddingBottom: 8
    }
})