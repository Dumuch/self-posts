import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { StyleSheet, Text, ScrollView, Image, Button, Alert} from 'react-native';

import { AppheaderIcon } from '../components/AppHeaderIcon';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { DATA } from '../data';
import { THEME } from '../theme';
import { toggleBooked } from '../store/actions/post';

export const PostScreen = ({ route, navigation }) => {
  const disptach = useDispatch()
  const { postId, date } = route.params;

  const post = DATA.find( p => p.id === postId)
  const booked = useSelector(state => state.post.bookedPosts.some(post => post.id === postId))

  // const booked = post.booked
  const iconName = booked ? 'ios-star' : 'ios-star-outline'

  const toggleHandler = useCallback(() => {
    console.log(postId)
    disptach(toggleBooked(postId))
  }, [disptach, postId])

  useEffect(() => {
    navigation.setParams({toggleHandler})
  }, [])

  useEffect(() => {
    navigation.setParams({booked})
  }, [booked])

  
  navigation.setOptions({ 
    title: postId, 
    headerTitle: new Date(date).toLocaleDateString(),
    headerRight: (props) => (
      <HeaderButtons HeaderButtonComponent={AppheaderIcon}>         
        <Item title="Take photo" iconName={iconName} onPress={toggleHandler} />      
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