import { Animated, FlatList } from "react-native";
import React, { useState, useRef } from "react";
import { Button, VStack, HStack } from "native-base";
import Slides from "../../components/carousel/carouselArea/images-descriptions";
import Pagination from "../../components/carousel/pagination/Pagination";
import SlideItem from "../../components/carousel/slideItem/SlideItem";
import CustomButton from "../../components/customComponents/customButton/CustomButton";

const FirstPage = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const onSignInHandler = () => {
    navigation.navigate("Login");
  };

  const onRegisterHandler = () => {
    navigation.navigate("Register");
  };

  const handleOnScroll = (event) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      }
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(({ viewableItems }) => {
    setIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <VStack alignItems="center" display="flex" flex={1} bg="white">
      <VStack flex={6}>
        <FlatList
          data={Slides}
          renderItem={({ item }) => <SlideItem item={item} />}
          horizontal
          pagingEnabled
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
          onScroll={handleOnScroll}
          onViewableItemsChanged={handleOnViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
        />
        <Pagination data={Slides} scrollX={scrollX} index={index} />
      </VStack>
      <VStack flex={1}>
        <HStack mx={35}>
          <CustomButton
            width={"50%"}
            heigh={"110%"}
            onPressHandler={onSignInHandler}
            buttonText={"Sign in"}
            buttonBg={"black"}
            buttonBorderBottomRightRadius={0}
            buttonBorderTopRightRadius={0}
            buttonTextStyle={{fontSize:"25",fontWeight:"bold"}}
          />
          <CustomButton
            width={"50%"}
            heigh={"110%"}
            onPressHandler={onRegisterHandler}
            buttonText={"Register"}
            buttonBorderBottomLeftRadius={0}
            buttonBorderTopLeftRadius={0}
            buttonTextStyle={{fontSize:"25",fontWeight:"bold"}}
          />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default FirstPage;
