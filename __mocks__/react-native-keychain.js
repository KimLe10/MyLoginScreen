// Manual mock: react-native-keychain talks to the native Keychain/Keystore,
// which isn't available under the Jest environment.
let stored = null;

module.exports = {
  setGenericPassword: jest.fn(async (username, password) => {
    stored = { username, password };
    return true;
  }),
  getGenericPassword: jest.fn(async () => stored ?? false),
  resetGenericPassword: jest.fn(async () => {
    stored = null;
    return true;
  }),
};
