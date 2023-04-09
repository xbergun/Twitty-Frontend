import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import CustomIcon from "../customComponents/CustomIcon";
import { useColorMode } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ChangeThemeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const handleChangeTheme = () => {
    toggleColorMode(!colorMode);
  };

  console.log(colorMode)

  const conditionColor = colorMode === "dark" ? "white" : "black";
  const borderColor = colorMode === "dark" ? "black" : "white";

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: conditionColor,
          borderColor: borderColor,
        },
      ]}
      onPress={handleChangeTheme}
    >
      <CustomIcon
        iconName="theme-light-dark"
        color={colorMode === "dark" ? "black" : "white"}
        as={MaterialCommunityIcons}
      />
    </TouchableOpacity>
  );
};

export default ChangeThemeButton;

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    position: "absolute",
    bottom: 0,
    right: 0,
    marginBottom: 200,
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
