import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import MainNavigation from "./src/navigations/MainNavigation";
import Toast from 'react-native-toast-message';
import { theme } from "./src/common/theme/theme";
import { useColorMode, useTheme } from 'native-base';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NativeBaseProvider theme={theme}>
          <MainNavigation />
          <Toast/>
        </NativeBaseProvider>
      </NavigationContainer>
    </Provider>
  );
}
