import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  Easing,
} from "react-native";
import React from "react";
import { useColorMode, useTheme } from "native-base";
const { width, height } = Dimensions.get("screen");

const SlideItem = ({ item }) => {
  const translateYImage = new Animated.Value(0);
  const { colorMode, toggleColorMode } = useColorMode();
  const theme = useTheme();
  const themeColor = theme.colors.mode[colorMode];

  console.log("SlideItem -> theme", colorMode);
  Animated.timing(translateYImage, {
    toValue: 0,
    duration: 1000,
    useNativeDriver: true,
    easing: Easing.bounce,
  }).start();

  return (
    <View style={styles.container}>
      <Animated.Image
        source={item.img}
        resizeMode="contain"
        style={[
          styles.image,
          {
            transform: [
              {
                translateY: translateYImage,
              },
            ],
          },
        ]}
      />

      <View style={styles.content}>
        <Text
          style={[
            styles.title,
            {
              color: themeColor?.text,
            },
          ]}
        >
          {item.title}
        </Text>
        <Text style={[styles.description, {
          color: themeColor?.text,
        }]}>
          {item.description}
        </Text>
      </View>
    </View>
  );
};

export default SlideItem;

const styles = StyleSheet.create({
  container: {
    width,
    height,
    alignItems: "center",
  },
  image: {
    flex: 0.5,
    width: "80%",
  },
  content: {
    flex: 0.4,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  description: {
    marginHorizontal: "8%",
    fontSize: 18,
    marginVertical: 12,
  },
});
