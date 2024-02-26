import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create ({
    container : {
        marginBottom: 8
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: colors.grey,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    input: {
        paddingHorizontal: 16,
        paddingVertical: 20,
        flex: 1
    },
    label: {
        marginBottom: 8,
        marginVertical: 8,
        color: colors.blue,
        fontWeight: '500'
    },
    eye: {
        marginRight: 10
    }
})