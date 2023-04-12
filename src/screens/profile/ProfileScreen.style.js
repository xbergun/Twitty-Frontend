import { StyleSheet } from "react-native";


const styles = (theme) => StyleSheet.create({
    baseContainer: {
        height: "100%",
        backgroundColor:theme?.background
    },
    coverImage : {
        width: "100%",
        height: 138
    },
    userAvatar : {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: -30,
        borderColor: "white",

        borderWidth: 5,
    },
    editProfileButton : {
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#4C9EEB",
        padding: 10,
        borderRadius: 20,
        marginTop: 15,
        width: 100,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
    },
    editProfileText : {
        color: "#4C9EEB",
    },
    nameText : {
        fontSize: 22,
        fontWeight: "900",
        color: theme?.text
    },
    usernameText : {
        fontSize: 16,
        fontWeight: "400",
        color: "#687684",
    },
    bioText : {
        fontSize: 16,
        fontWeight: "400",
        color: theme?.text,
        marginTop: 10,
    }

});


export default styles;