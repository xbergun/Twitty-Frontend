import { View } from "react-native";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Posts from "../../components/posts/Posts";
import { getAllPost } from "../../common/api/posts/getAllPost";
import { API_STATUS } from "../../common/enums/apiEnums";
import Loading from "../../components/loading/Loading";

const HomeScreen = () => {
  const { allPostsData, getAllPostApiStatus } = useSelector(
    (state) => state?.posts
  );

  useEffect(() => {
    getAllPost();
  }, []);

  return getAllPostApiStatus === API_STATUS.REQUEST ? (
    <Loading />
  ) : (
    <View
      style={{
        backgroundColor: "white",
      }}
    >
      <Posts posts={allPostsData.data} />
    </View>
  );
};

export default HomeScreen;
