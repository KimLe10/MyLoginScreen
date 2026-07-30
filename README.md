# CocktailClub

React Native app — login flow gating a cocktail search list, backed by TheCocktailDB's public API.

## Stack

React Native, TypeScript, React Navigation, `react-native-keychain` (credentials), `react-native-mmkv` (fast local storage for non-sensitive data like last-login time)

## Running it

```bash
npm install
npm run ios      # or: npm run android
```

## Tests

```bash
npm test
```

Covers login form validation. Native keychain/mmkv modules are mocked under Jest.
