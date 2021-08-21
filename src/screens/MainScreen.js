import React from 'react';
import { StyleSheet, Text, View, Button, FlatList} from 'react-native';
import { AppheaderIcon } from '../components/AppHeaderIcon';

import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { Post } from '../components/Post';

import { DATA } from '../data'

export const MainScreen = ({ navigation }) => {

  navigation.setOptions({ 
    title:'Главная',
    headerRight: (props) => (
      <HeaderButtons HeaderButtonComponent={AppheaderIcon}>         
        <Item title="Take photo" iconName="ios-camera" />      
      </HeaderButtons>
    ),
    headerLeft: (props) => (
      <HeaderButtons HeaderButtonComponent={AppheaderIcon}>         
        <Item title="Toggle Drawer" iconName="ios-menu" />      
      </HeaderButtons>
    ) 
  })


  const openPosthandler = post => {
    navigation.navigate('Post', { postId: post.id, date: post.date })
  }


  return (
    <View style={styles.wrapper}>
      <FlatList data={DATA}
        keyExtractor={post => post.id.toString()}
        renderItem={({ item }) => <Post post={item} onOpen={openPosthandler} />
        } />
    </View>
  )


}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  }
})