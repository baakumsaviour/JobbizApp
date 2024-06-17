// src/screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    navigation.navigate('Home', { name, email });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jobizz</Text>
      <Text style={styles.subtitle}>Welcome Back 👋</Text>
      <Text style={styles.description}>Let's log in. Apply to jobs!</Text>

      <TextInput 
        style={styles.input} 
        placeholder="Name" 
        value={name}
        onChangeText={setName}
      />
      <TextInput 
        style={styles.input} 
        placeholder="Email" 
        keyboardType="email-address" 
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or continue with</Text>

      <View style={styles.iconContainer}>
        <FontAwesome.Button name="apple" backgroundColor="#000" onPress={() => {}} />
        <FontAwesome.Button name="google" backgroundColor="#DB4437" onPress={() => {}} />
        <FontAwesome.Button name="facebook" backgroundColor="#3b5998" onPress={() => {}} />
      </View>

      <Text style={styles.registerText}>
        Haven't an account? <Text style={styles.registerLink}>Register</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  // Styles go here
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#3b5998',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    color: 'gray',
    marginBottom: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  registerText: {
    textAlign: 'center',
    color: 'gray',
  },
  registerLink: {
    color: '#3b5998',
  },
});

export default LoginScreen;
