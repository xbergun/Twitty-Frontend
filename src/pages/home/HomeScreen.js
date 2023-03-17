import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { getToken } from '../../helpers/auth/token';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
  const {userData} = useSelector((state) => state?.auth);
  
  return (
    <View>
      <Text>{
        userData?.data.username
      }</Text>
      <Text>{
        userData?.access_token
      }</Text>
      <Text>{
        userData?.data.name
      }</Text>
    </View>
  )
}

export default HomeScreen