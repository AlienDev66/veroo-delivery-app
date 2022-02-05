import { StyleSheet } from 'react-native'
import { theme } from '@global/themes/default'

import { RFValue } from 'react-native-responsive-fontsize'
import { getBottomSpace } from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: theme.COLORS.main_light
  },
  thumbnail: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  turnBack: {
    width: 40,
    height: 40,

    justifyContent: 'center',
    alignItems: 'center',

    position: 'absolute',
    top: 54,
    left: 0,

    marginLeft: 24,

    borderRadius: 20,
    backgroundColor: theme.COLORS.background
  },
  icon: {
    fontSize: 24,
    color: theme.COLORS.title
  },
  content: {
    borderTopRightRadius: 28,
    borderTopLeftRadius: 28,

    paddingBottom: getBottomSpace() + 20,

    backgroundColor: theme.COLORS.background
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    padding: 32
  },
  title: {
    fontSize: RFValue(20),
    fontFamily: theme.FONTS.regular,
    color: theme.COLORS.title
  },
  price: {
    fontSize: RFValue(28),
    fontFamily: theme.FONTS.regular,
    color: theme.COLORS.title
  },
  about: {
    paddingHorizontal: 32
  },
  description: {
    fontSize: RFValue(15),
    fontFamily: theme.FONTS.light,
    color: theme.COLORS.text,

    lineHeight: RFValue(22),
    textAlign: 'justify'
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingHorizontal: 32,
    marginTop: 40
  },
  like: {
    width: 64,
    height: 64,

    borderRadius: 32,

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 24,

    backgroundColor: theme.COLORS.main_dark
  },
  likedIcon: {
    marginTop: 2
  },
  liked: {
    backgroundColor: theme.COLORS.liked
  }
})
