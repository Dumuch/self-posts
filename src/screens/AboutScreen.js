import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppheaderIcon } from '../components/AppHeaderIcon';

export const AboutScreen = ({ navigation }) => {

  navigation.setOptions({ 
    title:'О приложении',
    headerLeft: (props) => (
      <HeaderButtons HeaderButtonComponent={AppheaderIcon}>         
        <Item title="Toggle Drawer" iconName="ios-menu" onPress={()=>navigation.toggleDrawer()} />      
      </HeaderButtons>
    ) 
  })

 return <View style={styles.center}>
    <Text>О приложении</Text>
  </View>
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})