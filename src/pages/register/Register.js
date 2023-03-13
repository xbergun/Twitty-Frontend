import React, { useState } from "react";
import {
  Text,
  VStack,
  Input,
  Link,
  useToast,
  Box,
} from "native-base";
import CustomButton from "../../components/customComponents/CustomButton";
import { apiCall } from "../../common/api/apiCall";
import CustomInput from "../../components/customComponents/CustomInput";
import { useSelector } from "react-redux";
import postRegister from "../../common/api/auth/postRegister";
import axios from "axios";
import { API_STATUS } from "../../common/enums/apiEnums";

const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  // const toast = useToast();

  // const registerUserStatus = useSelector((state) => state?.auth?.registerUserStatus);

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

  const request = await postRegister(JSON.stringify(requestBody));

  console.log(request)

  };


  return (
    <VStack display="flex" flex={1} bg="white">
      <Text fontSize="45" alignSelf="flex-start" ml={10} my={2} bold>
        Lets Register Account
      </Text>
      <Text fontSize="25" alignSelf="flex-start" ml={10}>
        Hello ,
      </Text>
      <Text fontSize="25" alignSelf="flex-start" ml={10}>
        you have a greatful journey
      </Text>

      {/* {
        registerUserStatus === API_STATUS.SUCCESS && (
          alert("User Registered Successfully")
        )
      } */}
    

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
        height={"6%"}
        width={"80%"}
        buttonBg={"black"}
        buttonTextStyle={{ fontWeight: "bold", fontSize: 20 }}
        mx={"10%"}
        onPressHandler={onLoginHandler}
      />

      <Text mt="8%" mx={10} alignSelf="center" fontSize={15}>
        Already have an account?{" "}
        <Link fontWeight="bold" onPress={onRegisterHandler}>
          Login
        </Link>
      </Text>
    </VStack>
  );
};

export default Register;
