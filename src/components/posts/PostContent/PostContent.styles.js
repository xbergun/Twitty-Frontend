import { StyleSheet } from "react-native";
const styles = (theme) => StyleSheet.create({
    containerScrollView: {
        marginHorizontal: 10,
        marginVertical: 8,
    },
    userAvatar : {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    nameText : {
        fontWeight: 'bold',
        color: theme.text,
    },
    usernameText : {
        color: theme.text,
    },
    createdAtText : {
        color: theme.text,
    },
    descText : {
        color: theme.text,
    },
    likesCount : {
        color: theme.text,
    },
});


export default styles;