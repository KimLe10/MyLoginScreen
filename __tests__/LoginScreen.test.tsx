/**
 * @format
 */

import React from 'react';
import ReactTestRenderer, { act } from 'react-test-renderer';
import { TextInput, TouchableOpacity } from 'react-native';
import LoginScreen from '../screens/LoginScreen';
import { useAuth } from '../store/context/AuthContext';

jest.mock('../store/context/AuthContext', () => ({
  useAuth: jest.fn(),
}));

describe('LoginScreen', () => {
  const login = jest.fn();

  beforeEach(() => {
    login.mockClear();
    (useAuth as jest.Mock).mockReturnValue({ login });
  });

  const renderScreen = async () => {
    let root: ReactTestRenderer.ReactTestRenderer;
    await act(async () => {
      root = ReactTestRenderer.create(<LoginScreen />);
    });
    return root!;
  };

  it('starts with empty email and password fields', async () => {
    const root = await renderScreen();
    const inputs = root.root.findAllByType(TextInput);
    expect(inputs[0].props.value).toBe('');
    expect(inputs[1].props.value).toBe('');
  });

  it('does not call login when fields are empty', async () => {
    const root = await renderScreen();
    const signInButton = root.root.findAllByType(TouchableOpacity)[1];

    await act(async () => {
      signInButton.props.onPress();
    });

    expect(login).not.toHaveBeenCalled();
  });

  it('calls login with the entered email and password', async () => {
    const root = await renderScreen();
    const [emailInput, passwordInput] = root.root.findAllByType(TextInput);

    await act(async () => {
      emailInput.props.onChangeText('user@example.com');
      passwordInput.props.onChangeText('hunter2');
    });

    const signInButton = root.root.findAllByType(TouchableOpacity)[1];
    await act(async () => {
      await signInButton.props.onPress();
    });

    expect(login).toHaveBeenCalledWith('user@example.com', 'hunter2');
  });
});
