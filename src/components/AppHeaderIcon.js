import React from 'react'
import { HeaderButton } from 'react-navigation-header-buttons'
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { THEME } from '../theme';

export const AppheaderIcon = props => {
  return (
  <HeaderButton 
  {...props}
  iconSize={24} 
  IconComponent={Ionicons}
  color={ Platform.OS === 'android' ? THEME.WHITE_COLOR : THEME.MAIN_COLOR} />
  )
}  

