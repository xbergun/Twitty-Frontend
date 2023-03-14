import { View } from "react-native";
import BottomTabNavigation from "./BottomTabNavigation";
import { useSelector } from "react-redux";
import AuthNavigation from "./AuthNavigation";

export default MainNavigation = () => {
  const { userData } = useSelector((state) => state.auth);

  return (
    <View flex={1}>
      {userData ? <BottomTabNavigation /> : <AuthNavigation />}
    </View>
  );
};
