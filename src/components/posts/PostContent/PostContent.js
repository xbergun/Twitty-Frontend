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


const dummyImage =
"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80";



const PostContent = ({ post }) => {

  const {userData} = useSelector((state) => state.auth);

  const navigation = useNavigation();

  const handleGoToProfile = () => {
    navigation.navigate("ProfileScreen", { user: post?.user });
  };

  const handleLikePost = () => {
    console.log("Like Post" + post?._id);
    console.log(userData.user._id);
  };

  return (
    <ScrollView style={styles.containerScrollView}>
      <HStack space={2}>
        <TouchableOpacity onPress={handleGoToProfile}>
          <Image source={{ uri: dummyImage }} style={styles.userAvatar} />
        </TouchableOpacity>
        <VStack>
          <HStack space={2}>
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              {post?.user?.name}
            </Text>
            <Text>{post?.user?.username}</Text>
            <Text>{postDateFormat(post.createdAt)}</Text>
          </HStack>
          <Text>{post?.description}</Text>
          <HStack space={2} marginY={2}>
            <TouchableOpacity onPress={handleLikePost}>
              <Icon as={AntDesign} name="heart" size="sm" />
            </TouchableOpacity>
            <Text>{post?.likes ? post?.likes?.length : 0}</Text>

            {
              // Eklenmedi daha
            }
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
