import React from 'react'
import { View, Text } from 'react-native'

import TouchableScale, {
  TouchableScaleProps
} from 'react-native-touchable-scale'
import { SvgFromUri } from 'react-native-svg'
import { SharedElement } from 'react-navigation-shared-element'

import { MotiView } from 'moti'

import { styles } from './styles'

import AddIcon from '@assets/add.svg'

interface Props extends TouchableScaleProps {
  data: {
    id: string
    photo: string
    name: string
    price: number
  }
  delay: number
}

export const DrinkCard: React.FC<Props> = ({ data, delay, ...rest }) => {
  return (
    <MotiView
      from={{
        opacity: 0,
        translateY: 32
      }}
      animate={{
        opacity: 1,
        translateY: 0
      }}
      delay={delay * 100}
    >
      <TouchableScale style={styles.container} friction={5} {...rest}>
        <SharedElement id={`item.${data.id}.photo`}>
          <SvgFromUri uri={data.photo} />
        </SharedElement>

        <View style={styles.content}>
          <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
            {data.name}
          </Text>

          <View style={styles.footer}>
            <Text style={styles.price}>
              {data.price.toLocaleString('es-US', {
                style: 'currency',
                currency: 'USD'
              })}
            </Text>
            <AddIcon />
          </View>
        </View>
      </TouchableScale>
    </MotiView>
  )
}
