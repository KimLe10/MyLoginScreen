import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useAuth } from '../store/context/AuthContext';

const SettingsScreen = () => {
  const { user, logout, lastLogin } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.subtitle}>Signed in as</Text>
      <Text style={styles.email}>{user}</Text>
      {lastLogin && (
        <Text style={styles.subtitle}>
          Last login: {new Date(lastLogin).toLocaleString()}
        </Text>
      )}
      <TouchableOpacity style={styles.logoutButton} onPress={logout}>
        <Text style={styles.logoutText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: '600', marginBottom: 8 },
  subtitle: { fontSize: 13, color: '#888', marginTop: 8 },
  email: { fontSize: 16, color: '#333' },
  logoutButton: {
    marginTop: 24,
    backgroundColor: '#666',
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutText: { color: '#fff', fontSize: 14, fontWeight: '600' },
});

export default SettingsScreen;
