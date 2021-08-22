import React from 'react';
import { StyleSheet, Text, View, Button, FlatList} from 'react-native';
import { AppheaderIcon } from '../components/AppHeaderIcon';
import { useSelector } from 'react-redux';

import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { Post } from '../components/Post';


export const BookedScreen = ({ navigation }) => {

  navigation.setOptions({ 
    title:'Избранное',
    headerLeft: (props) => (
      <HeaderButtons HeaderButtonComponent={AppheaderIcon}>         
        <Item title="Toggle Drawer" iconName="ios-menu" onPress={()=>navigation.toggleDrawer()} />      
      </HeaderButtons>
    ) 
  })

  const openPosthandler = post => {
    navigation.navigate('Post', { postId: post.id, date: post.date })
  }

  const bookedPosts = useSelector(state => state.post.bookedPosts)



  return (
    <View style={styles.wrapper}>
      <FlatList data={bookedPosts}
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