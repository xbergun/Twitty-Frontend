import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Constants from 'expo-constants';
import { useSelector } from 'react-redux';
import postCreatePost from '../../../common/api/posts/postCreatePost';
import CustomInput from '../../customComponents/CustomInput';
import CustomButton from '../../customComponents/CustomButton';
import { Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import CustomToast from '../../toast/CustomToast';
import { TOAST_TYPES } from '../../../common/enums/toastEnums';

export default function CreatePost() {

  const [description, setDescription] = React.useState('');

  const navigation = useNavigation();

  const handleCreatePost =  () => {
    postCreatePost(description)
  };

  return (
    <View style={styles.container}>
      <CustomInput
        label="description"
        placeholder="Description"
        onChangeText={text => setDescription(text)}
        value={description}
        style={{
          height: 200, width: 300, marginLeft: 10, marginTop: 10,

        }}
      />
      <Button
        style={{
          height: 50,
          margin: 40,
          backgroundColor: '#4C9EEB',

        }}

        onPress={handleCreatePost}
      >
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Create Post</Text>
      </Button>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 8,
    
  },


});
