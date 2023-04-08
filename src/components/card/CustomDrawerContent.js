import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { HStack, VStack, useColorMode, useTheme } from "native-base";
import { View, Text, Image, StyleSheet } from "react-native";
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
  const { colorMode } = useColorMode();
  const theme = useTheme();
  const themeColor = theme.colors.mode[colorMode];
  const handleLogout = async () => {
    store.dispatch(getLogoutSuccess());
    CustomToast("success", "Logged out successfully");
  };

  return (
    <DrawerContentScrollView {...props}>
      <VStack space={2} style={styles.container}>
        <Image
          style={styles.imageAvatar}
          source={{ uri: user.avatar ? user.avatar : dummyImage }}
        />
        <Text
          style={[
            styles.nameText,
            {
              color: themeColor?.text,
            },
          ]}
        >
          {user?.name}
        </Text>
        <Text
          style={[
            styles.usernameText,
            {
              color: themeColor?.text,
            },
          ]}
        >
          @{user?.username}
        </Text>
        <HStack space={1}>
          <Text
            style={[
              styles.followersText,
              {
                color: themeColor?.text,
              },
            ]}
          >
            {user.followers ? user.followers.length : 0} Followers
          </Text>

          <Text
            style={[
              styles.followingText,
              {
                color: themeColor?.text,
              },
            ]}
          >
            {user.following ? user.following.length : 0} Following:
          </Text>
        </HStack>
      </VStack>

      <DrawerItemList {...props} />

      <DrawerItem
        label="Logout"
        style={styles.logoutTab}
        onPress={handleLogout}
      />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  imageAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  nameText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  usernameText: {
    fontSize: 14,
  },
  followersText: {
    fontSize: 16,
    color: "#808080",
  },
  followingText: {
    fontSize: 16,
    color: "#808080",
  },
  logoutTab: {
    borderTopWidth: 1,
    borderTopColor: "#808080",
    marginTop: 10,
  },
});

export default CustomDrawerContent;
