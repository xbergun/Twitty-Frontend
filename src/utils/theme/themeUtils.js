import { useColorMode, useTheme } from "native-base";

export const getThemeColor = () => {
  const { colorMode } = useColorMode();
  const theme = useTheme();
  return theme.colors.mode[colorMode];
};
