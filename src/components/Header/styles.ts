import { StyleSheet } from 'react-native'
import { theme } from '@global/themes/default'

import { RFValue } from 'react-native-responsive-fontsize'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingHorizontal: 24
  },
  greetings: {
    fontSize: RFValue(28),
    fontFamily: theme.FONTS.bold,
    color: theme.COLORS.title
  },
  localization: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  address: {
    fontSize: RFValue(17),
    fontFamily: theme.FONTS.light,
    color: theme.COLORS.text,

    marginLeft: 4
  },
  avatar: {
    width: 50,
    height: 50,

    borderRadius: 25
  }
})
