import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    tile: {
        flex: 1,
        flexDirection: "row",
        marginHorizontal: "5%",
        marginBottom: "2%",
        borderWidth: 1,
        borderRadius: 15,
        backgroundColor: "#282828"
    },
    left: {
        flex: 4,
        marginVertical: "2%",
        marginLeft: "5%"
    },
    right: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        margin: "2%",
        fontSize: 24,
        color: "#4d4d4d"
    },
    title: {
        color: "#c4c4c4",
        fontSize: 14,
        fontWeight: "bold"
    },
    timer: {
        marginTop: "2%",
        color: "#c4c4c4",
        fontWeight: "100",
        fontSize: 14,
    }
});

export default style;