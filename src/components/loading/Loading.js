import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HStack, Spinner } from 'native-base';

const Loading = () => {
  return (
    <HStack style={styles.container}>
        <Spinner size="lg" />
      </HStack>
  )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})


export default Loading

