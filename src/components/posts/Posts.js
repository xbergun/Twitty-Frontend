import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import PostContent from "./PostContent/PostContent";
import PostListEmptyComponent from './PostContent/PostListEmptyComponent';

const Posts = ({posts}) => {

  const handleRenderItem = ({ item }) => {
    return <PostContent post={item} />;
  };

  const handleListEmptyComponent = () => {
    return <PostListEmptyComponent />;
  };

  return (
    <FlatList
      style={styles.flatList}
      data={posts}
      renderItem={handleRenderItem}
      keyExtractor={(item) => item?._id}
      ListEmptyComponent={handleListEmptyComponent}
    />
  );
};

export default Posts;

const styles = StyleSheet.create({
  flatList :{
    height: '100%'
  }
});
