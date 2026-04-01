import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('David Brooks');
  const [password, setPassword] = useState('********');
  const googleLogoUrl = 'https://developers.google.com/identity/images/g-logo.png';
 
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.formContainer}>
          
          // Header
          <Text style={styles.brandTitle}>Lovebirds</Text>
          <Text style={styles.welcomeText}>Welcome to Lovebirds</Text>

          // Input Fields
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
              secureTextEntry
            />
            <View style={styles.borderBottom} />
          </View>

          // Link
          <TouchableOpacity style={styles.forgotLink}>
            <Text style={styles.grayTextSmall}>Forgot password?</Text>
          </TouchableOpacity>

          // Button
          <TouchableOpacity style={styles.signInButton}>
            <Text style={styles.btnText}>Sign in</Text>
          </TouchableOpacity>

          // Or Divider
          <View style={styles.dividerContainer}>
            <View style={styles.line} />
            <Text style={styles.orText}>or</Text>
            <View style={styles.line} />
          </View>

          // Google
          <TouchableOpacity style={styles.googleLink}>
            <Image source={{ uri: googleLogoUrl }} style={styles.googleIcon} />
            <Text style={styles.googleText}>Sign in with Google</Text>
          </TouchableOpacity>

          // Footer
          <View style={styles.footer}>
            <Text style={styles.grayTextSmall}>New Lovebirds? </Text>
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
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#cfcece',
  },
  orText: {
    marginHorizontal: 12,
    color: '#cfcece',
    fontSize: 12,
  },
  googleLink: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  googleIcon: { 
    width: 18, 
    height: 18, 
    marginRight: 10 
  },
  googleText: {
    color: '#666',
    fontSize: 13,
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