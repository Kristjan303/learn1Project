import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    title: {
        textAlign: "center",
        fontSize: 40,
        fontWeight: "bold"
    },
    innerTitle: {
        color: colors.orange,
        textDecorationLine: "underline"
    },
    container: {
        alignItems: "center",
        height: "100%",
        justifyContent: "center",
        flexDirection: "column",
        padding: 24,
    },
    footerText: {
        marginTop: 30,
        color: colors.blue,
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold"
    },
    titleContainer: {
        marginVertical: 54
    }

})