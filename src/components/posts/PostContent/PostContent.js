import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { HStack, Icon, VStack, Divider } from "native-base";
import postDateFormat from "../../../helpers/date/postDateFormat";
import {
  MaterialIcons,
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import styles from "./PostContent.styles";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { getLikeUnLikePost } from "../../../common/api/posts/getLikeUnLikePost";
import { getThemeColor } from "../../../utils/theme/themeUtils";

const dummyImage =
  "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80";

const PostContent = ({ post }) => {
  const { userData } = useSelector((state) => state.auth);
  const theme = getThemeColor();
  const navigation = useNavigation();

  const handleGoToProfile = () => {
    navigation.navigate("ProfileScreen", { user: post?.user });
  };

  const handleLikePost = () => {
    getLikeUnLikePost(post._id);
  };

  return (
    <ScrollView style={styles(theme).containerScrollView}>
      <HStack space={2}>
        <TouchableOpacity onPress={handleGoToProfile}>
          <Image
            source={{ uri: dummyImage }}
            style={styles(theme).userAvatar}
          />
        </TouchableOpacity>
        <VStack>
          <HStack space={1}>
            <Text style={styles(theme)?.nameText}>{post?.user?.name}</Text>
            <Text style={styles(theme).usernameText}>
              @{post?.user?.username}
            </Text>
            <Text style={styles(theme).createdAtText}>
              {postDateFormat(post.createdAt)}
            </Text>
          </HStack>
          <Text style={styles(theme).createdAtText}>{post?.description}</Text>
          <HStack space={2} marginY={2}>
            <TouchableOpacity onPress={handleLikePost}>
              <Icon as={AntDesign} name="heart" size="sm" />
            </TouchableOpacity>
            <Text style={styles(theme).likesCount}>
              {post?.likes ? post?.likes?.length : 0}
            </Text>

            {/* API NOT READY YET */}

            {/* <TouchableOpacity onPress={handleCommentPost}>
              <Icon as={MaterialCommunityIcons} name="comment" size="sm" />
            </TouchableOpacity>
            <Text>{post?.comments ? post?.comments : 0}</Text> */}
          </HStack>
        </VStack>
      </HStack>
      <Divider mt="2" mb="2" />
    </ScrollView>
  );
};

export default PostContent;
