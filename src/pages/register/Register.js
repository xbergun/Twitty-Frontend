import React, { useState } from "react";
import { Text, VStack, Input, Link, FormControl ,useToast, Box} from "native-base";
import CustomButton from "../../components/customComponents/CustomButton";
import axios from "axios";
import { apiCall } from '../../common/api/apiCall';

const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const toast = useToast();

  const onRegisterHandler = () => {
    navigation.navigate("Login");
  };
  
  const onLoginHandler = () => {
    if (password !== confirmPassword) {
      alert("Password and Confirm Password must be same");
    } else {
      registerHandler();
      navigation.navigate("Login");
    }
  };

  const registerHandler = async () => {
    apiCall('auth/register', 'POST', {name, username, email, password}
    ).then((response) => {
      if(response) {
        toast.show({
          placement: "top",
          render: () => {
            return <Box bg="green.300" px="2" py="1" rounded="sm" mb={5}>
                    Kullanıcı başarıyla oluşturuldu.
                  </Box>;
          }
        });
      }else{
        toast.show({
          placement: "top",
          render: () => {
            return <Box bg="red.300" px="2" py="1" rounded="sm" mb={5}>
                    Kullanıcı adı veya şifre hatalı, lütfen bilgilerinizi kontrol ediniz.
                  </Box>;
          }
        });
      }
    }
    );
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

      <FormControl>
        <FormControl.Label ml={"9%"}>Name</FormControl.Label>
        <Input mt="1%" mx="9%" onChangeText={setName} value={name} />
      </FormControl>

      <FormControl>
        <FormControl.Label ml={"9%"}>Username</FormControl.Label>
        <Input mt="1%" mx="9%" onChangeText={setUsername} value={username} />
      </FormControl>

      <FormControl>
        <FormControl.Label ml={"9%"}>Email</FormControl.Label>
        <Input mt="1%" mx="9%" onChangeText={setEmail} value={email} />
      </FormControl>

      <FormControl>
        <FormControl.Label ml={"9%"}>Password</FormControl.Label>
        <Input
          mt="1%"
          mx="9%"
          type="password"
          onChangeText={setPassword}
          value={password}
        />
      </FormControl>

      <FormControl>
        <FormControl.Label ml={"9%"}>Confirm Password</FormControl.Label>
        <Input
          mt="1%"
          mx="9%"
          type="password"
          onChangeText={setConfirmPassword}
          value={confirmPassword}
        />
      </FormControl>

      <CustomButton
        buttonText={"Sign up"}
        mt={5}
        height={"6%"}
        width={"82%"}
        buttonBg={"black"}
        buttonTextStyle={{ fontWeight: "bold", fontSize: 20 }}
        mx={10}
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
