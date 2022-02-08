import React, { useState } from 'react'
import { View, Text } from 'react-native'

import { useNavigation, useRoute } from '@react-navigation/native'

import { RectButton } from 'react-native-gesture-handler'
import { SvgFromUri } from 'react-native-svg'
import { Feather } from '@expo/vector-icons'
import TouchableScale from 'react-native-touchable-scale'
import { SharedElement } from 'react-navigation-shared-element'

import { MotiView } from 'moti'

import { styles } from './styles'

import LikeIcon from '@assets/like.svg'

import { Button } from '@components/Button'
import { Counter } from '@components/Counter'

interface Params {
  item: {
    id: string
    photo: string
    name: string
    description: string
    price: number
  }
}

export const Details: React.FC = () => {
  const navigation = useNavigation()
  const route = useRoute()

  const { item } = route.params as Params

  const [liked, setLiked] = useState(false)

  function handleCappuccinoLike() {
    setLiked(!liked)
  }

  return (
    <View style={styles.container}>
      <View style={styles.thumbnail}>
        <RectButton style={styles.turnBack} onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" style={styles.icon} />
        </RectButton>

        <SharedElement id={`item.${item.id}.photo`}>
          <SvgFromUri uri={item.photo} style={{ transform: [{ scale: 2 }] }} />
        </SharedElement>
        <Counter />
      </View>

      <View style={styles.content}>
        <MotiView
          from={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: 'timing' }}
          delay={2 * 100}
          style={styles.header}
        >
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.price}>
            {item.price.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD'
            })}
          </Text>
        </MotiView>

        <MotiView
          from={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: 'timing' }}
          delay={3 * 100}
          style={styles.about}
        >
          <Text
            style={styles.description}
            numberOfLines={5}
            ellipsizeMode="tail"
          >
            {item.description}
          </Text>
        </MotiView>

        <View style={styles.footer}>
          <TouchableScale
            style={[styles.like, liked && styles.liked]}
            friction={5}
            onPress={handleCappuccinoLike}
          >
            <LikeIcon style={styles.likedIcon} />
          </TouchableScale>
          <Button />
        </View>
      </View>
    </View>
  )
}
