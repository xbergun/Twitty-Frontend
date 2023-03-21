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


const PostContent = ({ post }) => {

  const dummyImage = "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"

  return (
    <ScrollView
      style={styles.containerScrollView}
    >
      <HStack space={2}>
        <Image
          source={{ uri: dummyImage }}
          style={styles.userAvatar}
        />
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
            <TouchableOpacity>
              <Icon as={AntDesign} name="heart" size="sm" />
            </TouchableOpacity>
            <Text>{post?.likes}</Text>

            <TouchableOpacity>
              <Icon as={MaterialCommunityIcons} name="comment" size="sm" />
            </TouchableOpacity>
            <Text>{post?.comments}</Text>
          </HStack>
        </VStack>
      </HStack>
      <Divider mt="2" mb="2" />
    </ScrollView>
  );
};

export default PostContent;

