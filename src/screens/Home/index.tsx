import React from 'react'
import { View } from 'react-native'

import { FlatGrid } from 'react-native-super-grid'

import { styles } from './styles'

import { Header } from '@components/Header'
import { FilterSelector } from '@components/FilterSelector'
import { DrinkCard } from '@components/DrinkCard'

export const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header />
      <FilterSelector onSelectedFilter={event => console.log(event)} />

      <View style={styles.content}>
        <FlatGrid
          spacing={17}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            paddingTop: 12,
            paddingBottom: 200 // temporary
          }}
          data={[1, 2, 3, 4, 5, 6, 7, 8]}
          keyExtractor={item => String(item)}
          renderItem={() => <DrinkCard />}
        />
      </View>
    </View>
  )
}
