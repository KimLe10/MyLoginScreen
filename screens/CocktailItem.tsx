// CocktailItem.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Cocktail } from '../types/DrinkInterface';

const CocktailItem = React.memo(({ item }: { item: Cocktail }) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.strDrinkThumb }} style={styles.image} />
      <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
        {item.strDrink}
      </Text>
    </View>
  );
});

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 10,
  },
  image: { width: 50, height: 50, borderRadius: 25, marginRight: 15 },
  title: { flex: 1, fontSize: 16, fontWeight: '500' },
});

export default CocktailItem;