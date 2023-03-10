import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Login from "./src/pages/login/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "./src/pages/register/Register";
import Home from "./src/pages/home/Home";
import FirstPage from "./src/pages/firstPage/FirstPage";
import { NativeBaseProvider } from "native-base";
import { Provider } from "react-redux";
import {store} from "./src/redux/store";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider  store={store}>
      <NativeBaseProvider>  
        <NavigationContainer>
          <Stack.Navigator initialRouteName="FirstPage">
            <Stack.Screen name="FirstPage" component={FirstPage} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}
