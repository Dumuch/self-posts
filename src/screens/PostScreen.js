import React, {useEffect} from 'react';
import { StyleSheet, Text, ScrollView, Image, Button, Alert} from 'react-native';
import { AppheaderIcon } from '../components/AppHeaderIcon';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { DATA } from '../data';
import { THEME } from '../theme';

export const PostScreen = ({ route, navigation }) => {
  const { postId, date } = route.params;

  const post = DATA.find( p => p.id === postId)
  const booked = post.booked
  const iconName = booked ? 'ios-star' : 'ios-star-outline'

  
  navigation.setOptions({ 
    title: postId, 
    headerTitle: new Date(date).toLocaleDateString(),
    headerRight: (props) => (
      <HeaderButtons HeaderButtonComponent={AppheaderIcon}>         
        <Item title="Take photo" iconName={iconName} />      
      </HeaderButtons>
    ),
  })



  const removeHandler = () => {
    Alert.alert(
      "Удаление поста",
      "Вы точно хотите удалить пост?",
      [
        {
          text: "Нет",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Да", onPress: () => console.log("OK Pressed") }
      ]
    );
  }

  return (
    <ScrollView style={styles.textWrap}>
      <Image style={styles.image} source={{uri: post.img}}/>
      <Text>{post.text}</Text>
      <Button title={'Удалить'} color={THEME.DANGER_COLOR} onPress={removeHandler}/>
    </ScrollView> 
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  textWrap: {
    padding: 10,
  },
  title: {
    fontFamily: 'open-regular'
  }
})