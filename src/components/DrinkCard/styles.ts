import { StyleSheet } from 'react-native'
import { theme } from '@global/themes/default'

import { RFValue } from 'react-native-responsive-fontsize'

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',

    padding: 12,

    borderRadius: 16,

    backgroundColor: theme.COLORS.main_light
  },
  content: {
    width: '100%',
    marginTop: 5
  },
  title: {
    fontSize: RFValue(17),
    fontFamily: theme.FONTS.semiBold,
    color: theme.COLORS.title
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginTop: 7
  },
  price: {
    fontSize: RFValue(17),
    fontFamily: theme.FONTS.light,
    color: theme.COLORS.text
  }
})
