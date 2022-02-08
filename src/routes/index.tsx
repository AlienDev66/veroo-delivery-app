import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'

import { Home } from '@screens/Home'
import { Details } from '@screens/Details'

type RootStackParamList = {
  Home: any
  Details: any
}
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const { Navigator, Screen } = createSharedElementStackNavigator()

export const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          transitionSpec: {
            open: { animation: 'timing', config: { duration: 300 } },
            close: { animation: 'timing', config: { duration: 300 } }
          },
          cardStyleInterpolator: ({ current: { progress } }) => {
            return {
              cardStyle: {
                opacity: progress
              }
            }
          }
        }}
      >
        <Screen name="Home" component={Home} />
        <Screen
          name="Details"
          component={Details}
          sharedElements={route => {
            const { item } = route.params
            return [
              {
                id: `item.${item.id}.photo`,
                animation: 'move',
                resize: 'auto'
              }
            ]
          }}
          options={{
            gestureEnabled: false
          }}
        />
      </Navigator>
    </NavigationContainer>
  )
}
