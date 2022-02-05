import React from 'react'
import { Text } from 'react-native'

import TouchableScale, {
  TouchableScaleProps
} from 'react-native-touchable-scale'

import { styles } from './styles'

export const Button: React.FC<TouchableScaleProps> = ({ ...rest }) => {
  return (
    <TouchableScale style={styles.container} friction={5} {...rest}>
      <Text style={styles.title}>Add to cart</Text>
    </TouchableScale>
  )
}
