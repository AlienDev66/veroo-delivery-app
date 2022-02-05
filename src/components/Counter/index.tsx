import React, { useState } from 'react'
import { View, Text } from 'react-native'

import { RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'

import { styles } from './styles'

export const Counter: React.FC = () => {
  const [amount, setAmount] = useState(1)

  function handleIncreaseQuantity() {
    setAmount(amount + 1)
  }

  function handleDecreaseQuantity() {
    setAmount(amount - 1)
  }

  return (
    <View style={styles.container}>
      <RectButton style={styles.button} onPress={handleIncreaseQuantity}>
        <Feather name="plus" style={styles.icon} />
      </RectButton>

      <Text style={styles.indicator}>{amount}</Text>

      <RectButton
        style={[styles.button, { opacity: amount === 1 ? 0.5 : 1 }]}
        enabled={amount > 1}
        onPress={handleDecreaseQuantity}
      >
        <Feather name="minus" style={styles.icon} />
      </RectButton>
    </View>
  )
}
