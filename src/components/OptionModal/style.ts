import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: "black",
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        borderWidth: 1,
        zIndex: 1
    },
    optionContainer: {
        padding: 20,
        flexDirection: "row",
        alignItems: "center"
    },
    fill: {
        position: "absolute",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    },
    title: {
        padding: 10,
        fontSize: 18,
        fontWeight: "bold",
        alignSelf: 'center',
        color: "white"
    },
    subtitle: {
        fontSize: 14,
        fontWeight: "100",
        alignSelf: 'center',
        color: "white"
    },
    option: {
        fontSize: 17,
        fontWeight: "bold",
        paddingVertical: 10,
        color: "white"
    },
    icon: {
        marginRight: "5%",
        fontSize: 24,
        color: "#5c5c5c"
    }
});

export default style;