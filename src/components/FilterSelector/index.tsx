import React, { useState } from 'react'
import { View, ScrollView, TouchableOpacity, Text } from 'react-native'

import { styles } from './styles'

interface Props {
  onSelectedFilter(event: string): void
}

const filters = ['All', 'Coffee', 'Iced Blended', 'Juice']

export const FilterSelector: React.FC<Props> = ({ onSelectedFilter }) => {
  const [selectedFilter, setSelectedFilter] = useState('All')

  function handleFilterSelection(filter: string) {
    setSelectedFilter(filter)
    onSelectedFilter(filter)
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          paddingLeft: 24
        }}
        showsHorizontalScrollIndicator={false}
        horizontal
      >
        {filters.map((filter, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.filter,
              selectedFilter === filter && styles.filterSelected
            ]}
            activeOpacity={0.5}
            onPress={() => handleFilterSelection(filter)}
          >
            <Text
              style={[
                styles.filterTitle,
                selectedFilter === filter && styles.filterTitleSelected
              ]}
            >
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}
