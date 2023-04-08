import { SafeAreaView, View } from "react-native";
import BottomTabNavigation from "./BottomTabNavigation";
import { useSelector } from "react-redux";
import AuthNavigation from "./AuthNavigation";
import DrawerNavigation from "./DrawerNavigation";
import { StatusBar } from "react-native";
import { useColorMode } from "native-base";

export default MainNavigation = () => {
  const { userData } = useSelector((state) => state.auth);
  const { colorMode} = useColorMode();

  return (
    <>
      <StatusBar barStyle={colorMode === 'dark' ? 'light-content' : 'dark-content'} />
      {userData ? <DrawerNavigation /> : <AuthNavigation />}
    </>
  );

};
