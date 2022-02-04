import React from 'react'
import { View, StyleSheet } from 'react-native'

import { theme } from '@global/themes/default'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { RFValue } from 'react-native-responsive-fontsize'

import { Home } from '@screens/Home'

import HomeIcon from '@assets/home.svg'
import HomeFocusedIcon from '@assets/homeFocused.svg'
import SearchIcon from '@assets/search.svg'
import SearchFocusedIcon from '@assets/searchFocused.svg'
import BagIcon from '@assets/bag.svg'
import BagFocusedIcon from '@assets/bagFocused.svg'

const { Navigator, Screen } = createBottomTabNavigator()

export const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: RFValue(80),
            alignItems: 'center',
            paddingHorizontal: 52
          },
          tabBarItemStyle: {
            maxWidth: 50,
            maxHeight: 50,
            marginHorizontal: 56
          }
        }}
      >
        <Screen
          name="Home-1"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.container}>
                {focused && <View style={styles.highlighter} />}
                {focused ? (
                  <HomeFocusedIcon width={28} height={28} />
                ) : (
                  <HomeIcon width={28} height={28} />
                )}
              </View>
            )
          }}
        />
        <Screen
          name="Home-2"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.container}>
                {focused && <View style={styles.highlighter} />}
                {focused ? (
                  <SearchFocusedIcon width={28} height={28} />
                ) : (
                  <SearchIcon width={28} height={28} />
                )}
              </View>
            )
          }}
        />
        <Screen
          name="Home-3"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.container}>
                {focused && <View style={styles.highlighter} />}
                {focused ? (
                  <BagFocusedIcon width={28} height={28} />
                ) : (
                  <BagIcon width={28} height={28} />
                )}
              </View>
            )
          }}
        />
      </Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,

    justifyContent: 'center',
    alignItems: 'center'
  },
  highlighter: {
    width: 18,
    height: 3,

    position: 'absolute',
    top: 0,

    backgroundColor: theme.COLORS.main_dark
  }
})
