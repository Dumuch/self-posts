import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export const MainScreen = ({ navigation }) => {

  const goToPost = () => {
    navigation.navigate('Post')
  }



  return <View style={styles.center}>
    <Text>Главный экран</Text>
    <Button title="Go" onPress={goToPost} />
  </View>


}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})