import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';

const ProfileScreen = ({route}) => {

  const {_id, name,username} = route.params.user;

    console.log(route.params)

  return (
    <View>
      <Text>{_id}</Text>
      <Text>{name}</Text>
      <Text>{username}</Text>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})