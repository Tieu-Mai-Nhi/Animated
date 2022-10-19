import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#fff",
        marginBottom: 15,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "space-between",
        width: '70%'
    },
    square: {
        width: 48,
        height: 36,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    number: {
        fontSize: 16,
        color: "#fff",
    },
    content: {
        width: "70%",
        fontSize: 16,
        marginLeft: 6,
    },
    even: {
        backgroundColor: 'green',
        color: "#000"
    },
    odd: {
        backgroundColor: 'orange',
        color: "#000"

    },
    button: {
        height: 40,
        width: 60,
        borderRadius: 10,
        backgroundColor: "deeppink",
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 4
    }
});

export default styles;
