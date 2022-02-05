import { StyleSheet } from 'react-native'
import { theme } from '@global/themes/default'

import { RFValue } from 'react-native-responsive-fontsize'

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',

    position: 'absolute',
    right: 0,

    marginRight: 24
  },
  button: {
    width: 40,
    height: 40,

    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 20,
    backgroundColor: theme.COLORS.background
  },
  icon: {
    fontSize: 24,
    color: theme.COLORS.title
  },
  indicator: {
    fontSize: RFValue(16),
    fontFamily: theme.FONTS.regular,
    color: theme.COLORS.title,

    marginVertical: 8
  }
})
