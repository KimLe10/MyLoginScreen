// Context api
// local storages (async,mmkv, keychain)
// Navigators i.e Tab,Drawer, Top Bar
// react-native-responsive-font
// react-native-size-matters

import React, { createContext, useState, useContext, useEffect } from 'react';
import * as Keychain from 'react-native-keychain';
import { createMMKV } from 'react-native-mmkv';

const storage = createMMKV();
const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [lastLogin, setLastLogin] = useState<string | null>(null);

  useEffect(() => {
    // Check if user was previously logged in on app start
    const checkLogin = async () => {
      const credentials = await Keychain.getGenericPassword();
      if (credentials) {
        setUser(credentials.username);
        setLastLogin(storage.getString('user.lastLogin') ?? null);
      }
      setIsLoading(false);
    };
    checkLogin();
  }, []);

  const login = async (email: string, password: string) => {
    // Save to Keychain for security
    await Keychain.setGenericPassword(email, password);
    // Save non-sensitive info to MMKV
    const now = new Date().toISOString();
    storage.set('user.lastLogin', now);
    setLastLogin(now);
    setUser(email);
  };

  const logout = async () => {
    await Keychain.resetGenericPassword();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading, lastLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);