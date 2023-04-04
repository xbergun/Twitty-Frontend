import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { HStack, VStack } from "native-base";
import { View, Text, Image } from "react-native";
import { useSelector } from "react-redux";
import getLogout from "../../common/api/auth/getLogout";
import { store } from "../../redux/store";
import { getLogoutSuccess } from "../../redux/slices/AuthSlice";
import { useNavigation } from "@react-navigation/native";
import CustomToast from "../toast/CustomToast";

const dummyImage =
  "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80";

function CustomDrawerContent(props) {
  const { user } = useSelector((state) => state?.auth?.userData);

  const handleLogout = async () => {
    store.dispatch(getLogoutSuccess());
    CustomToast("success", "Logged out successfully");
  };

  return (
    <DrawerContentScrollView {...props}>
      <VStack space={2} style={{ padding: 15 }}>
        <Image
          style={{ width: 80, height: 80, borderRadius: 40 }}
          source={{ uri: user.avatar ? user.avatar : dummyImage }}
        />
        <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 10 }}>
          {user?.name}
        </Text>
        <Text style={{ fontSize: 14 }}>@{user?.username}</Text>
        <HStack space={1}>
          <Text style={{ fontSize: 16, color: "#808080" }}>
            {user.followers ? user.followers : 0} Followers
          </Text>

          <Text style={{ fontSize: 16, color: "#808080" }}>
            {user.following ? user.following : 0} Following:
          </Text>
        </HStack>
      </VStack>

      <DrawerItemList {...props} />

      <DrawerItem label="Logout" style={{}} onPress={handleLogout} />
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;
