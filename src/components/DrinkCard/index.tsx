import React from 'react'
import { Image, View, Text } from 'react-native'

import TouchableScale, {
  TouchableScaleProps
} from 'react-native-touchable-scale'

import { styles } from './styles'

import exampleImg from '@assets/example.png'
import AddIcon from '@assets/add.svg'

interface Props extends TouchableScaleProps {}

export const DrinkCard: React.FC<Props> = ({ ...rest }) => {
  return (
    <TouchableScale style={styles.container} friction={5} {...rest}>
      <Image source={exampleImg} />

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
          Peppermint Mocha
        </Text>

        <View style={styles.footer}>
          <Text style={styles.price}>$ 6.99</Text>
          <AddIcon />
        </View>
      </View>
    </TouchableScale>
  )
}
