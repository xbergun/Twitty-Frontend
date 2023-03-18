import { View, Text, FlatList } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { getToken } from "../../helpers/auth/token";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Posts from "../../components/posts/Posts";

const HomeScreen = () => {
  // const { posts } = useSelector((state) => state?.auth.userData);

  return (
    <View
      style={{
        backgroundColor: "white",
      }}
    >
      <Posts  />
    </View>
  );
};

export default HomeScreen;
