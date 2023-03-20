import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import PostContent from "./PostContent/PostContent";

const Posts = ({posts}) => {
  const handleRenderItem = ({ item }) => {
    return <PostContent post={item} />;
  };

  

  return (
    <FlatList
      style={{ height: "100%" }}
      data={posts}
      renderItem={handleRenderItem}
      keyExtractor={(item) => item?._id}
      ListEmptyComponent={() => <Text>Empty</Text>}
    />
  );
};

export default Posts;

const styles = StyleSheet.create({});
