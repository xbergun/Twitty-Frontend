import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Icon } from "native-base";
import CustomIcon from "../../customComponents/CustomIcon";
import { useSelector } from "react-redux";
import { HOME_ROUTES } from "../../../navigations/Constants";

const CreatePostButton = ({ navigation }) => {
  const { userData } = useSelector((state) => state?.auth);

  const handleGoCreatePostScreen = () => {
    navigation.navigate(HOME_ROUTES.CREATE_POST, { userData });
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleGoCreatePostScreen}
    >
      <CustomIcon iconName="add" color="white" />
    </TouchableOpacity>
  );
};

export default CreatePostButton;

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    position: "absolute",
    bottom: 0,
    right: 0,
    margin: 20,
    backgroundColor: "#4C9EEB",
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
