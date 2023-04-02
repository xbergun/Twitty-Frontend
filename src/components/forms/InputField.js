import React from "react";
import { Controller } from "react-hook-form";
import { View, Text, TextInput, Pressable } from "react-native";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { InputLeftAddon } from "../../../node_modules/native-base/src/components/primitives/Input/InputAddons";
import { Input } from "native-base";

export default function InputField({
  control,
  name,
  rules,
  label,
  secureTextEntry,
  defaultValue,
  style,
  placeholder,
  inputLeftElement,
  leftIconName,
  rightIconName,
  inputRightElement,
  leftIconOnPress,
  rightIconOnPress,
}) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={defaultValue}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { invalid, error },
      }) => (
        <View>
          <Text>{label}</Text>
          <Input
            onChangeText={onChange}
            value={value}
            secureTextEntry={secureTextEntry}
            onBlur={onBlur}
            placeholder={placeholder}
            height={50}
            borderWidth={1}
            mx={"10%"}
            my={2}
            borderRadius={5}
            borderColor="gray.300"
            InputLeftElement={
              inputLeftElement && (
                <MaterialIcons
                  name={leftIconName}
                  size={"24"}
                  color={"black"}
                  style={{ marginLeft: 10 }}
                  onPress={leftIconOnPress}
                />
              )
            }
            InputRightElement={
              inputRightElement && (
                <MaterialIcons
                  name={rightIconName}
                  size={"24"}
                  color={"black"}
                  style={{ marginRight: 10 }}
                  onPress={rightIconOnPress}
                />
              )
            }
          />

          <View
            style={{
              marginLeft: "10%",
            }}
          >
            {invalid && error && error.type === "minLength" && (
              <Text>{`${label} en az ${error.message} karakter olmalıdır`}</Text>
            )}
            {invalid && error && error.type === "maxLength" && (
              <Text>{`${label} en fazla ${error.message} karakter olabilir`}</Text>
            )}
            {invalid && error && error.type === "required" && (
              <Text style={{ color: "red" }}>Gerekli alan</Text>
            )}
          </View>
        </View>
      )}
    />
  );
}
