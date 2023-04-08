import React from "react";
import { Text, VStack, HStack , View} from "native-base";
import CustomButton from "../../components/customComponents/CustomButton";
import postRegister from "../../common/api/auth/postRegister";
import i18n from "../../common/localization/i18n";
import InputField from "../../components/forms/InputField";
import { useForm } from "react-hook-form";
import { useColorMode, useTheme } from "native-base";

import CustomToast from "../../components/toast/CustomToast";

const Register = ({ navigation }) => {
  const { control, handleSubmit } = useForm();

  const { colorMode, toggleColorMode } = useColorMode();
  const theme = useTheme();
  const themeColor = theme.colors.mode[colorMode];

  const onRegisterHandler = () => {
    navigation.navigate("Login");
  };

  const registerHandler = async (data) => {
    const { name, username, email, password, confirmPassword } = data;

    if (password !== confirmPassword) {
      return CustomToast("error", "Password and Confirm Password must be same");
    }

    const requestBody = {
      name,
      username,
      email,
      password,
    };

    await postRegister(requestBody);
  };

  return (
    <VStack display="flex" flex={1} bg={themeColor?.background}>
      <View ml={10}>
        <Text fontSize={40} my={2} bold>
          {i18n.t("Register.LetsRegister")}
        </Text>
        <Text fontSize={25} >
          {i18n.t("Register.Hello")}
        </Text>
        <Text fontSize={25} >
          {i18n.t("Register.Great")}
        </Text>
      </View>

      <InputField
        name={"name"}
        control={control}
        placeholder={i18n.t("Input.Name")}
        rules={{ required: true, minLength: 5 }}
      />

      <InputField
        name={"username"}
        control={control}
        placeholder={i18n.t("Input.Username")}
        rules={{ required: true, minLength: 5 }}
      />

      <InputField
        name={"email"}
        control={control}
        placeholder={i18n.t("Input.Email")}
        rules={{ required: true, minLength: 5 }}
      />

      <InputField
        name={"password"}
        control={control}
        placeholder={i18n.t("Input.Password")}
        rules={{ required: true, minLength: 5 }}
      />

      <InputField
        name={"confirmPassword"}
        control={control}
        placeholder={i18n.t("Input.ConfirmPassword")}
        rules={{ required: true, minLength: 5 }}
      />

      <CustomButton
        buttonText={i18n.t("Register.SignUpButton")}
        mt={5}
        height={"8%"}
        width={"81%"}
        buttonBg={themeColor?.buttonBg}
        buttonTextStyle={{ fontWeight: "bold", fontSize: 20 }}
        mx={"10%"}
        onPressHandler={handleSubmit(registerHandler)}
      />
      <HStack
        display="flex"
        alignItems="center"
        justifyContent="center"
        mt="8%"
      >
        <Text alignSelf="center" fontSize={17}>
          {i18n.t("Register.AlreadyHaveAccount")} {" "}
          <Text bold onPress={onRegisterHandler} fontSize={18}>
            {i18n.t("Register.Login")}
          </Text>
        </Text>
      </HStack>
    </VStack>
  );
};

export default Register;
