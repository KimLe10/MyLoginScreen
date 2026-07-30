import { Cocktail } from '../types/DrinkInterface';

const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';

export const getCocktails = async (): Promise<Cocktail[]> => {
  try {
    const response = await fetch(BASE_URL);
    const json = await response.json();
    
    return json.drinks || [];
  } catch (error) {
    console.error("Cocktail Service Error:", error);
    throw error; 
  }
};