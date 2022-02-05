import { StyleSheet } from 'react-native'
import { theme } from '@global/themes/default'

import { RFValue } from 'react-native-responsive-fontsize'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 64,

    borderRadius: 50,

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: theme.COLORS.title
  },
  title: {
    fontSize: RFValue(17),
    fontFamily: theme.FONTS.regular,
    color: theme.COLORS.background
  }
})
