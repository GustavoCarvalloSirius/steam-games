import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card: {
        display: "flex",
        borderRadius: 16,
        overflow: "hidden",
        // all images seem to be 600x900, so we set 300x450 to maintain the aspect ratio
        width: 300,
        height: 450,
        // todo: test adding a shadow
    },
    image: {
        flex: 1,
        resizeMode: "cover",
    },
    imageNotAvailableContainer: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
    },
    imageNotAvailableText: {
        color: "white",
        fontSize: 24
    }
})

export default styles;