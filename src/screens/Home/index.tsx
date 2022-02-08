import React, { useState, useEffect } from 'react'
import { View, ActivityIndicator } from 'react-native'

import { FlatGrid } from 'react-native-super-grid'
import { useNavigation } from '@react-navigation/native'

import { getBottomSpace } from 'react-native-iphone-x-helper'

import { api } from '@services/api'

import { styles } from './styles'
import { theme } from '@global/themes/default'

import { Header } from '@components/Header'
import { FilterSelector } from '@components/FilterSelector'
import { DrinkCard } from '@components/DrinkCard'

interface IDrinkData {
  id: string
  photo: string
  name: string
  description: string
  price: number
}

export const Home: React.FC = () => {
  const navigation = useNavigation()

  const [drinks, setDrinks] = useState<IDrinkData[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadDrinksFromServer() {
      try {
        const { data } = await api.get<IDrinkData[]>('/drinks')
        setDrinks(data)
      } catch {
        console.log('Error')
      } finally {
        setIsLoading(false)
      }
    }
    loadDrinksFromServer()
  }, [])

  return (
    <View style={styles.container}>
      <Header />
      <FilterSelector onSelectedFilter={event => console.log(event)} />

      <View style={styles.content}>
        {isLoading ? (
          <View style={styles.loading}>
            <ActivityIndicator color={theme.COLORS.main_dark} size="large" />
          </View>
        ) : (
          <FlatGrid
            spacing={17}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              flexGrow: 1,
              paddingTop: 12,
              paddingBottom: getBottomSpace()
            }}
            data={drinks}
            keyExtractor={({ id }) => id}
            renderItem={({ item, index }) => (
              <DrinkCard
                data={item}
                delay={index}
                onPress={() => navigation.navigate('Details', { item })}
              />
            )}
          />
        )}
      </View>
    </View>
  )
}
