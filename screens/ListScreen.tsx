import React, { useEffect, useState, useCallback } from 'react';
import {
  View, 
  FlatList, 
  StyleSheet, 
  ActivityIndicator
} from 'react-native';
import { Cocktail } from '../types/DrinkInterface';
import CocktailItem from './CocktailItem';
import { getCocktails } from '../api/DrinksServices';

// www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
const ListScreen = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Cocktail[]>([]);

const loadData = async () => {
    try {
      setLoading(true);
      const drinks = await getCocktails(); // Call the separated logic
      setData(drinks);
    } catch (error) {
      console.log("Failed to load cocktails", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const renderItem = useCallback(({ item }: { item: Cocktail }) => (
    <CocktailItem item={item} />
  ), []);

  if (loading) {
    return <ActivityIndicator size="large" color="#129d3c" style={{ flex: 1 }} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.idDrink}
        renderItem={renderItem}
        contentContainerStyle={styles.listPadding}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  listPadding: { padding: 16 },
});

export default ListScreen;