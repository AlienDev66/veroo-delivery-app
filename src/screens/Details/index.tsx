import React, { useState } from 'react'
import { View, Text } from 'react-native'

import { RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import TouchableScale from 'react-native-touchable-scale'

import { styles } from './styles'

import Test from '@assets/test.svg'
import LikeIcon from '@assets/like.svg'

import { Button } from '@components/Button'
import { Counter } from '@components/Counter'

export const Details: React.FC = () => {
  const [liked, setLiked] = useState(false)

  function handleCappuccinoLike() {
    setLiked(!liked)
  }

  return (
    <View style={styles.container}>
      <View style={styles.thumbnail}>
        <RectButton style={styles.turnBack}>
          <Feather name="chevron-left" style={styles.icon} />
        </RectButton>

        <Test width={400} height={400} />
        <Counter />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Peppermint Mocha</Text>
          <Text style={styles.price}>$ 18.98</Text>
        </View>

        <View style={styles.about}>
          <Text style={styles.description}>
            A holiday classic, our Peppermint Mocha infuses hand-pulled espresso
            with rich chocolate sauce, sweet peppermint, topped with a cloud of
            whipped cream.
          </Text>
        </View>

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
