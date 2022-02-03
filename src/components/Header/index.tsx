import React from 'react'
import { View, Text, Image } from 'react-native'

import { styles } from './styles'

import LocalizationIcon from '@assets/localization.svg'

export const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greetings}>Good Morning</Text>
        <View style={styles.localization}>
          <LocalizationIcon />
          <Text style={styles.address}>648 Bridge Street</Text>
        </View>
      </View>

      <Image
        style={styles.avatar}
        source={{ uri: 'https://github.com/lucasaugustscode.png' }}
      />
    </View>
  )
}
