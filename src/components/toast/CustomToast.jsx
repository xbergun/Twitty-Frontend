import Toast from 'react-native-toast-message';

const CustomToast = (
  type="success",
  text1= type === "success" ? "Success" : "Error",
  text2 = type === "success" ? "Successfully Created" : "Error",
) => {
  return (
    Toast.show({
      type:type,
      text1: text1,
      text2: text2,
      visibilityTime: 4000,
      autoHide: true,
      topOffset: 30,
      bottomOffset: 40,
    })
  );
}

export default CustomToast;