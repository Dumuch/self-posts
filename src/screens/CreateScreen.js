import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { Button, Image, Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppheaderIcon } from '../components/AppHeaderIcon';
import { THEME } from '../theme';
import { addPost } from '../store/actions/post';


export const CreateScreen = ({ navigation }) => {
  navigation.setOptions({ 
    title:'Создать',
    headerLeft: (props) => (
      <HeaderButtons HeaderButtonComponent={AppheaderIcon}>         
        <Item title="Toggle Drawer" iconName="ios-menu" onPress={()=>navigation.toggleDrawer()} />      
      </HeaderButtons>
    ) 
  })

  const dispatch = useDispatch()

  const [text, setText] = useState('')
  
  const saveHandler = () => {
    const post = {
      date: new Date().toJSON(),
      text: text,
      img: '',
      booked: false
    }
    dispatch(addPost(post))
    navigation.navigate('Main')
  }

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss() } >
        <View style={styles.wrapper}>
        <Text style={styles.title}>Новый пост</Text>
        <TextInput 
          style={styles.textArea} 
          placeholder='Введите текст' 
          value={text} 
          onChangeText={setText}
          multiline
          />

          <Button title='Создать пост' color={THEME.MAIN_COLOR} onPress={saveHandler} />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  )

}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10
  },
  textArea: {
    padding: 10,
    marginBottom: 10
  }
})