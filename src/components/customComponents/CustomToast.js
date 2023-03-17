import React from "react";
import { Box, useToast } from "native-base";

const CustomToast = ({message}) => {

  const toast = useToast();

  return toast.show({
    placement: "top",
    render: () => {
      return (
        <Box bg="blue.100" px="2" py="1" rounded="sm" mb={5}>
          {message}
        </Box>
      );
    },
  });
};

export default CustomToast;
