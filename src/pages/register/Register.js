import React, { useState } from "react";
import { Button, Text, VStack, Input, Link } from "native-base";
import CustomButton from "../../components/customComponents/customButton/CustomButton";

const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const onRegisterHandler = () => {
    navigation.navigate("Login");
  };
  const onLoginHandler = () => {
    navigation.navigate("Login");
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

      <Input
        h="6%"
        mt="5%"
        mx="9%"
        onChangeText={setName}
        value={name}
        placeholder="Name"
        placeholderTextColor="black"
      />
      <Input
        h="6%"
        mt="2%"
        mx="9%"
        onChangeText={setUsername}
        value={username}
        placeholder="Username"
        placeholderTextColor="black"
      />
      <Input
        h="6%"
        mt="2%"
        mx="9%"
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        placeholderTextColor="black"
      />
      <Input
        h="6%"
        my="2%"
        mx="9%"
        type="password"
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        placeholderTextColor="black"
      />
      <Input
        h="6%"
        my="2%"
        mx="9%"
        type="password"
        onChangeText={setConfirmPassword}
        value={confirmPassword}
        placeholder="Confirm Password"
        placeholderTextColor="black"
      />

      <CustomButton
      buttonText={"Sign up"}
        mt={5}
        heigh={"6%"}
        buttonBg={"black"}
        buttonTextStyle={{ fontWeight: "bold", fontSize: 20 }}
        mx={9}
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
