import { StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Posts from "../../components/posts/Posts";
import { getAllPost } from "../../common/api/posts/getAllPost";
import { API_STATUS } from "../../common/enums/apiEnums";
import Loading from "../../components/loading/Loading";
import CreatePostButton from "../../components/posts/CreatePost/CreatePostButton";
import { getThemeColor } from "../../utils/theme/themeUtils";

const HomeScreen = ({ navigation }) => {
  const { allPostsData, getAllPostApiStatus } = useSelector(
    (state) => state?.posts
  );

  const theme = getThemeColor();

  useEffect(() => {
    getAllPost();
  }, []);

  return getAllPostApiStatus === API_STATUS.REQUEST ? (
    <Loading />
  ) : (
    <View
      style={styles(theme).container}
    >
      <Posts posts={allPostsData.data} />
      <CreatePostButton navigation={navigation} />
    </View>
  );
};

const styles = (theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme?.background,
  },
});

export default HomeScreen;
