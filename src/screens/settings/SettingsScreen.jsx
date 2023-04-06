import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const settingsData = [
  {
    id: 1,
    title: 'Edit Profile',
    screen: 'EditProfileScreen',
  },
  {
    id: 2,
    title: 'Change Password',
    screen: 'ChangePasswordScreen',
  },
  {
    id: 3,
    title: 'Notifications',
    screen: 'NotificationsScreen',
  },
];

const SettingsScreen = ({navigation}) => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    }}>
      {settingsData.map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => navigation.navigate(item.screen)}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
              margin: 10,
            }}
          >{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>

  )
}

export default SettingsScreen

const styles = StyleSheet.create({})