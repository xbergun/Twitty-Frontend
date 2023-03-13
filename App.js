import Login from "./src/pages/login/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "./src/pages/register/Register";
import Home from "./src/pages/home/Home";
import IntroPage from "./src/pages/introPage/IntroPage";
import { NativeBaseProvider } from "native-base";
import { Provider } from "react-redux";
import {store} from "./src/redux/store";
import { NAVIGATION } from './src/navigations/Constants';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider  store={store}>
      <NativeBaseProvider>  
        <NavigationContainer>
          <Stack.Navigator initialRouteName={NAVIGATION.FIRST_PAGE} >
            <Stack.Screen name="IntroPage" component={IntroPage} options={{headerShown:false}}/>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Home" component={Home} />
             {/* {routes.map((route, index) => (
              <Stack.Screen
                key={index}
                name={route?.name}
                component={route?.component}
              />
            ))} */}
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}
