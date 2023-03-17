import React, { useState, useEffect } from "react";
import { Text, VStack, HStack, Button, Toast } from "native-base";
import CustomButton from "../../components/customComponents/CustomButton";
import CustomInput from "../../components/customComponents/CustomInput";
import { useSelector } from "react-redux";
import postRegister from "../../common/api/auth/postRegister";
import { API_STATUS } from "../../common/enums/apiEnums";
import i18n from "../../common/localization/i18n";

const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  // const toast = useToast();


  const onRegisterHandler = () => {
    navigation.navigate("Login");
  };

  const onLoginHandler = () => {
    if (password !== confirmPassword) {
      alert("Password and Confirm Password must be same");
    } else {
      registerHandler();
    }
  };

  const registerHandler = async () => {
    const requestBody = {
      name,
      username,
      email,
      password,
    };

    await postRegister(requestBody, navigation);
  };

  return (
    <VStack display="flex" flex={1} bg="white">
      <Text fontSize="40" alignSelf="flex-start" ml={10} my={2} bold>
        {i18n.t("Register.LetsRegister")}
      </Text>
      <Text fontSize="25" alignSelf="flex-start" ml={10}>
        {i18n.t("Register.Hello")}
      </Text>
      <Text fontSize="25" alignSelf="flex-start" ml={10}>
        {i18n.t("Register.Great")}
      </Text>

      <CustomInput 
      labelName={i18n.t("Input.Name")}
      onChangeText={setName} 
      value={name} />
      
      <CustomInput
        labelName={i18n.t("Input.Username")}
        onChangeText={setUsername}
        value={username}
      />
      <CustomInput labelName="Email" onChangeText={setEmail} value={email} />
      <CustomInput
        labelName={i18n.t("Input.Password")}
        onChangeText={setPassword}
        value={password}
        type="password"
      />
      <CustomInput
        labelName={i18n.t("Input.ConfirmPassword")}
        onChangeText={setConfirmPassword}
        value={confirmPassword}
        type="password"
      />

      <CustomButton
        buttonText={i18n.t("Register.SignUpButton")}
        mt={5}
        height={"8%"}
        width={"81%"}
        buttonBg={"black"}
        buttonTextStyle={{ fontWeight: "bold", fontSize: 20 }}
        mx={"10%"}
        onPressHandler={onLoginHandler}
      />
      <HStack
        display="flex"
        alignItems="center"
        justifyContent="center"
        mt="8%"
      >
        <Text alignSelf="center" fontSize={17}>
        {i18n.t("Register.AlreadyHaveAccount")} 
          <Text bold onPress={onRegisterHandler} fontSize={18}>
          {i18n.t("Register.Login")}
          </Text>
        </Text>
      </HStack>
    </VStack>
  );
};

export default Register;
