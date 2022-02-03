import { StyleSheet } from 'react-native'
import { theme } from '@global/themes/default'

import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: getStatusBarHeight() + 32,

    backgroundColor: theme.COLORS.background
  },
  content: {
    paddingHorizontal: 7
  }
})
