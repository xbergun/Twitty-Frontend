import React from "react";
import { FormControl, Input } from "native-base";

const CustomInput = ({
  h,
  mt,
  mx = "10%",
  my,
  mb = "2%",
  type,
  onChangeText,
  labelName,
  value,
  InputRightElement,
  pl,
}) => {
  return (
    <FormControl>
      <FormControl.Label ml={"10%"}>{labelName}</FormControl.Label>
      <Input
        h={h}
        pl={pl}
        mt={mt}
        my={my}
        mb={mb}
        mx={mx}
        type={type}
        InputRightElement={InputRightElement}
        onChangeText={onChangeText}
        value={value}
      />
    </FormControl>
  );
};

export default CustomInput;
