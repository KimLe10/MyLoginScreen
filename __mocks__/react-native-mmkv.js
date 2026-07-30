// Manual mock: react-native-mmkv relies on a native Nitro module that isn't
// present under the Jest environment, so we swap in a plain in-memory store.
const store = new Map();

const mockInstance = {
  set: (key, value) => store.set(key, value),
  getString: key => (store.has(key) ? String(store.get(key)) : undefined),
  getNumber: key => (store.has(key) ? Number(store.get(key)) : undefined),
  getBoolean: key => (store.has(key) ? Boolean(store.get(key)) : undefined),
  delete: key => store.delete(key),
  contains: key => store.has(key),
  clearAll: () => store.clear(),
};

module.exports = {
  createMMKV: () => mockInstance,
  MMKV: jest.fn().mockImplementation(() => mockInstance),
};
