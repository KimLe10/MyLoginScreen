import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { useAuth } from '../store/context/AuthContext';

const LoginScreen = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    if (email && password) {
      await login(email, password);
      // Navigation happens automatically in App.tsx based on 'user' state
    }
  };

  // create reusable components
  return (
    // Avoid keyboard covering screen when typing
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.formContainer}>
          
          {/* Header */}
          <Text style={styles.brandTitle}>CocktailClub</Text>
          <Text style={styles.welcomeText}>Welcome to CocktailClub</Text>

          {/* Input Fields */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Users name or Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
            />
            <View style={styles.borderBottom} />
          </View>

          <View style={[styles.inputGroup, { marginTop: 20 }]}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              secureTextEntry = {true}
            />
            <View style={styles.borderBottom} />
          </View>

          {/* Link */}
          <TouchableOpacity style={styles.forgotLink}>
            <Text style={styles.grayTextSmall}>Forgot password?</Text>
          </TouchableOpacity>

          {/* Button () => navigation.navigate('List')*/}
          <TouchableOpacity 
          style={styles.signInButton} 
          onPress={handleSignIn}>
            <Text style={styles.btnText} >Sign in</Text>
          </TouchableOpacity>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.grayTextSmall}>New to CocktailClub?</Text>
            <TouchableOpacity>
              <Text style={styles.underlineText}>Create Account</Text>
            </TouchableOpacity>
          </View>
          
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  formContainer: {
    width: '100%',
  },
  brandTitle: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 40,
  },
  welcomeText: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginBottom: 40,
  },
  inputGroup: {
    width: '100%',
  },
  label: {
    fontSize: 11,
    color: '#AAA',
    marginBottom: 4,
  },
  input: {
    fontSize: 16,
    color: '#333',
    paddingVertical: 4,
  },
  borderBottom: {
    height: 1,
    backgroundColor: '#cfcece',
  },
  forgotLink: {
    alignSelf: 'flex-end',
    marginTop: 8,
    marginBottom: 24,
    color: '#129d3c',
  },
  signInButton: {
    backgroundColor: '#666',
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
  },
  grayTextSmall: {
    fontSize: 12,
    color: '#9b9a9a',
  },
  underlineText: {
    fontSize: 12,
    color: '#129d3c',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;