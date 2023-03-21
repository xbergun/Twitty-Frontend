import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PostListEmptyComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No Posts Found</Text>
    </View>
  )
}

export default PostListEmptyComponent

const styles = StyleSheet.create({
    container :{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text : {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'

    }
})