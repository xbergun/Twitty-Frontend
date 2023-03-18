import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';

const ProfileScreen = () => {

    const {userData} = useSelector(state => state.auth)

  return (
    <View>
    
    
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})