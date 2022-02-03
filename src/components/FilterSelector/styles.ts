import { StyleSheet } from 'react-native'
import { theme } from '@global/themes/default'

import { RFValue } from 'react-native-responsive-fontsize'

export const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    marginBottom: 12
  },
  filter: {
    height: 40,

    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 20,

    paddingHorizontal: 18,
    paddingVertical: 5,

    marginRight: 14,

    backgroundColor: theme.COLORS.main_light
  },
  filterTitle: {
    fontSize: RFValue(14),
    fontFamily: theme.FONTS.medium,
    color: theme.COLORS.main_dark
  },
  filterSelected: {
    backgroundColor: theme.COLORS.main_dark
  },
  filterTitleSelected: {
    color: theme.COLORS.background
  }
})
