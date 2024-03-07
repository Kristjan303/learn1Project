import { StyleSheet } from "react-native";
import { create } from "react-test-renderer";


export const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.black,
        marginBottom: 12
    },
    email: {
        color: colors.grey,
        fontSize: 14,
        marginBottom: 16
    },
    content: {
        flex: 1,
    }
})
