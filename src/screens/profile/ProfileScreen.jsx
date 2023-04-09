import { Image, ScrollView, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native';
import { VStack, HStack, Button } from 'native-base';
import styles from './ProfileScreen.style';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { getThemeColor } from '../../utils/theme/themeUtils';

const DUMMY_IMAGE = "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80"

const dummyAvatar =
  "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80";

const ProfileScreen = ({ route }) => {

  const {user} = useSelector(state => state?.auth?.userData);

  const theme = getThemeColor();

  let { name, username } = route?.params?.user ? route.params.user : user;

  



  return (
    <SafeAreaView style={styles(theme).baseContainer}>
      <ScrollView>
        <VStack>
          <View >
            <Image source={{ uri: DUMMY_IMAGE }} style={styles.coverImage} />
          </View>
          <HStack space={2} justifyContent="space-around" >
            <View style={{
            }}>
              <Image source={{ uri: dummyAvatar }} style={styles.userAvatar} />
            </View>
            <TouchableOpacity style={styles.editProfileButton}>
              <Text style={styles.editProfileText}>Edit Profile</Text>
            </TouchableOpacity>
          </HStack>
          <VStack space={2} style={{ marginLeft: 40 , marginTop:10}}>
            <Text style={styles.nameText}>{name}</Text>
            <Text style={styles.usernameText}>@{username}</Text>
            <Text style={styles.bioText}>This is a dummy bio This is a dummy bio This is a dummy bio This is a dummy bio</Text>

            <HStack space={2} style={{ marginTop: 10 }}>
                
            </HStack>

          </VStack>
        </VStack>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileScreen