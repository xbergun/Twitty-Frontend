import React from "react";
import { Button } from "native-base";

const CustomButton = ({
  buttonText,
  onPressHandler,
  buttonBg,
  buttonBorderBottomRightRadius,
  buttonBorderTopRightRadius,
  buttonBorderBottomLeftRadius,
  buttonBorderTopLeftRadius,
  width,
  heigh,
  mx,
  buttonTextStyle,
  mt
}) => {
  return (
    <Button
      w={width}
      h={heigh}
      borderBottomRightRadius={buttonBorderBottomRightRadius}
      borderTopRightRadius={buttonBorderTopRightRadius}
      borderBottomLeftRadius={buttonBorderBottomLeftRadius}
      borderTopLeftRadius={buttonBorderTopLeftRadius}
      bg={buttonBg}
      _text={buttonTextStyle}
      onPress={onPressHandler}
      mx={mx}
      mt={mt}
    >
      {buttonText}
    </Button>
  );
};

export default CustomButton;
