import React from "react";
import { Controller } from "react-hook-form";
import { View, Text, TextInput } from "react-native";

export default function InputField({
  control,
  name,
  rules,
  label,
  secureTextEntry,
  defaultValue,
  style,
  placeholder
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
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry={secureTextEntry}
            style={{
              ...style
            }}
            placeholder={placeholder}
          />
          {invalid && error && error.type === "minLength" && (
            <Text>{`${label} en az ${error.message} karakter olmalıdır`}</Text>
          )}
          {invalid && error && error.type === "maxLength" && (
            <Text>{`${label} en fazla ${error.message} karakter olabilir`}</Text>
          )}
          {invalid && error && error.type === "required" && (
            <Text style={{ color: "blue" }}>Gerekli alan</Text>
          )}
        </View>
      )}
    />
  );
}
