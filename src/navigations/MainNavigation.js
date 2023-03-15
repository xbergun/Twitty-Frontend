import { SafeAreaView, View } from "react-native";
import BottomTabNavigation from "./BottomTabNavigation";
import { useSelector } from "react-redux";
import AuthNavigation from "./AuthNavigation";
import DrawerNavigation from './DrawerNavigation';

export default MainNavigation = () => {
  const { userData } = useSelector((state) => state.auth);

  return (
    <SafeAreaView flex={1}>
      {userData ? <DrawerNavigation /> : <AuthNavigation />}
    </SafeAreaView>
  );
};
