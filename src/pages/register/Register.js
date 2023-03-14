import React, { useState } from "react";
import { Text, VStack, HStack } from "native-base";
import CustomButton from "../../components/customComponents/CustomButton";
import CustomInput from "../../components/customComponents/CustomInput";
import { useSelector } from "react-redux";
import postRegister from "../../common/api/auth/postRegister";
import { API_STATUS } from "../../common/enums/apiEnums";

const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  // const toast = useToast();

  const registerUserStatus = useSelector(
    (state) => state?.auth?.registerUserStatus
  );

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

  // const user = useSelector((state) => state.auth);
  // console.log(user)

  const registerHandler = async () => {
    const requestBody = {
      name,
      username,
      email,
      password,
    };

    await postRegister(JSON.stringify(requestBody)).catch((error) => {
      alert("kullanıcı adı veya mail adresi kullanımda");
      console.log("error", error);
    });

    registerUserStatus === API_STATUS.SUCCESS && navigation.navigate("Login");
  };

  return (
    <VStack display="flex" flex={1} bg="white">
      <Text fontSize="40" alignSelf="flex-start" ml={10} my={2} bold>
        Lets Register Account
      </Text>
      <Text fontSize="25" alignSelf="flex-start" ml={10}>
        Hello ,
      </Text>
      <Text fontSize="25" alignSelf="flex-start" ml={10}>
        you have a greatful journey
      </Text>

      <CustomInput labelName="Name" onChangeText={setName} value={name} />
      <CustomInput
        labelName="Username"
        onChangeText={setUsername}
        value={username}
      />
      <CustomInput labelName="Email" onChangeText={setEmail} value={email} />
      <CustomInput
        labelName="Password"
        onChangeText={setPassword}
        value={password}
        type="password"
      />
      <CustomInput
        labelName="Confirm Password"
        onChangeText={setConfirmPassword}
        value={confirmPassword}
        type="password"
      />

      <CustomButton
        buttonText={"Sign up"}
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
          Already have an account?{" "}
          <Text bold onPress={onRegisterHandler} fontSize={18}>
            Login
          </Text>
        </Text>
      </HStack>
    </VStack>
  );
};

export default Register;
