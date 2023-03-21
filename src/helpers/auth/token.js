import AsyncStorage from '@react-native-async-storage/async-storage';


const setToken = async (token) => {
    try {
        const jsonValue = JSON.stringify(token);
        await AsyncStorage.setItem('@accessToken', jsonValue);
    } catch (error) {
        console.log(error);
    }
};

const getToken = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('@accessToken');
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
        console.log(error);
    }
}

const removeToken = async () => {
    try {
        await AsyncStorage.removeItem('@accessToken');
    } catch (error) {
        console.log(error);
    }
}

export { setToken, getToken };