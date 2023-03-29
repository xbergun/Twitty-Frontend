import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import MainNavigation from "./src/navigations/MainNavigation";
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NativeBaseProvider>
          <MainNavigation />
          <Toast  />
        </NativeBaseProvider>
      </NavigationContainer>
    </Provider>
  );
}
