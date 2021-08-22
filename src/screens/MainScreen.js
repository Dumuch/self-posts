import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Button, FlatList} from 'react-native';
import { AppheaderIcon } from '../components/AppHeaderIcon';
import {useDispatch, useSelector} from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { Post } from '../components/Post';
import { loadPosts } from '../store/actions/post';


export const MainScreen = ({ navigation }) => {

  navigation.setOptions({ 
    title:'Главная',
    headerRight: (props) => (
      <HeaderButtons HeaderButtonComponent={AppheaderIcon}>         
        <Item title="Take photo" iconName="ios-camera" onPress={()=>navigation.navigate('Create')}/>      
      </HeaderButtons>
    ),
    headerLeft: (props) => (
      <HeaderButtons HeaderButtonComponent={AppheaderIcon}>         
        <Item title="Toggle Drawer" iconName="ios-menu" onPress={()=>navigation.toggleDrawer()} />      
      </HeaderButtons>
    ) 
  })


  const openPosthandler = post => {
    navigation.navigate('Post', { postId: post.id, date: post.date })
  }

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadPosts())
  }, [dispatch])

  const allPosts = useSelector(state => state.post.allPosts)


  return (
    <View style={styles.wrapper}>
      <FlatList data={allPosts}
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