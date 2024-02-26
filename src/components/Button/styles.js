import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        paddingVertical: 20,
        paddingHorizontal: 8,
        width: "100%",
        borderRadius: 10,
        marginVertical: 10
    },
    title: {
        color: colors.white,
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold"
    }
})