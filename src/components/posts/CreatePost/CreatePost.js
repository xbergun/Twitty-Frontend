import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CreatePost = ({route}) => {
    const userData = route.params.userData
    console.log(userData)
  return (
    <View>
      <Text>CreatePost</Text>
    </View>
  )
}

export default CreatePost

const styles = StyleSheet.create({})