import * as React from "react";
import { Text, View, StyleSheet, TextInput, Alert } from "react-native";
import { useForm } from "react-hook-form";
import postCreatePost from "../../../common/api/posts/postCreatePost";
import { Button } from "native-base";
import { useNavigation } from "@react-navigation/native";
import InputField from "../../forms/InputField";
import { styles } from "./CreatePost.styles";

export default function CreatePost() {
  const { control, handleSubmit } = useForm();

  const navigation = useNavigation();

  function handleCreatePost(description) {
    const jsonDescription = JSON.stringify(description);

    postCreatePost(jsonDescription).then(() => {
      navigation.navigate("HomeScreen");
    });
  }

  return (
    <View style={styles.container}>
      <InputField
        control={control}
        name="description"
        rules={{ required: true, minLength: 5 }}
        placeholder="Description"
        style={styles.input}
      />
      <Button
        onPress={handleSubmit(handleCreatePost)}
          backgroundColor={"black"}
          style={styles.button}
      >
        <Text style={styles.buttonText}>Create Post</Text>
      </Button>
    </View>
  );
}
