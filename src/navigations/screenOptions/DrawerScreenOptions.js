export const getDrawerScreenOptions = (themeColor) => {
  return {
    headerShown: false,
    headerStyle: {
      backgroundColor: themeColor?.background,
    },
    headerTitleStyle: {
      color: themeColor?.text,
    },
    drawerLabelStyle: {
      color: themeColor?.text,
    },
    drawerActiveBackgroundColor: themeColor?.secondary,
    drawerStyle: {
      backgroundColor: themeColor?.background,
    },
  };
};


