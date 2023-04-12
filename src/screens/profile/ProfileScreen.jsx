import { FlatList, Image, ScrollView, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { VStack, HStack, Button } from "native-base";
import styles from "./ProfileScreen.style";
import { TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { getThemeColor } from "../../utils/theme/themeUtils";
import getPostsByUser from "../../common/api/posts/getPostsByUser";
import { API_STATUS } from "../../common/enums/apiEnums";
import Loading from "../../components/loading/Loading";
import Posts from "../../components/posts/Posts";

const DUMMY_IMAGE =
  "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80";

const dummyAvatar =
  "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80";

const ProfileScreen = ({ route }) => {
  const { user } = useSelector((state) => state?.auth?.userData);

  const { getPostsByUserApiStatus, postsByUser } = useSelector(
    (state) => state?.posts
  );

  const theme = getThemeColor();

  let { _id, name, username } = route?.params?.user ? route.params.user : user;

  React.useEffect(() => {
    getPostsByUser(route?.params?.user?._id);
  }, [user, _id]);

  return getPostsByUserApiStatus === API_STATUS.REQUEST ? (
    <Loading />
  ) : (
    <SafeAreaView style={styles(theme).baseContainer}>
      <VStack>
        <View>
          <Image
            source={{ uri: DUMMY_IMAGE }}
            style={styles(theme).coverImage}
          />
        </View>
        <HStack space={2} justifyContent="space-around">
          <View style={{}}>
            <Image
              source={{ uri: dummyAvatar }}
              style={styles(theme).userAvatar}
            />
          </View>
          <TouchableOpacity style={styles(theme).editProfileButton}>
            <Text style={styles(theme).editProfileText}>Edit Profile</Text>
          </TouchableOpacity>
        </HStack>
        <VStack space={2} style={{ marginLeft: 40, marginTop: 10 }}>
          <Text style={styles(theme).nameText}>{name}</Text>
          <Text style={styles(theme).usernameText}>@{username}</Text>
          <Text style={styles(theme).bioText}>
            This is a dummy bio This is a dummy bio This is a dummy bio This is
            a dummy bio
          </Text>

          {postsByUser ? (
            <View
              style={{
                height: "100%",
              }}
            >
              <Posts posts={postsByUser?.data} />
            </View>
          ) : (
            <Text>No Posts</Text>
          )}
        </VStack>
      </VStack>
    </SafeAreaView>
  );
};

export default ProfileScreen;
