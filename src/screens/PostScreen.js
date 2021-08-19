import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const PostScreen = ({ route, navigation }) => {
  const { postId, date } = route.params;

  navigation.setOptions({ title: postId, headerTitle: new Date(date).toLocaleDateString() })
  // const postId = navigation.getParam('postId')

  return (
    <View style={styles.center}>
      <Text>{postId}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})