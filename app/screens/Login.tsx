// ===========================================
// File: app/screens/Login.tsx
// This screen provides a form for users to log in to their account.
// It includes input fields for email and password, and buttons
// for logging in and navigating to the sign-up screen.
// ===========================================

import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, useRouter } from 'expo-router';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    // Handle the login process (placeholder)
    const handleLogin = () => {
        if (!email || !password) {
            Alert.alert('Incomplete Form', 'Please enter both email and password.');
            return;
        }
        // In a real app, you would call an authentication service here.
        console.log('Logging in with:', { email, password });
        Alert.alert('Success', 'Login functionality would be implemented here.');
        // Navigate to the main app screen after successful login
        // router.replace('/');
    };

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{ title: 'Log In' }} />
            <View style={styles.content}>
                <Text style={styles.title}>Welcome Back!</Text>
                <Text style={styles.subtitle}>Log in to continue</Text>

                {/* Email Input */}
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#9ca3af"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                />

                {/* Password Input */}
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#9ca3af"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                {/* Forgot Password Link */}
                <TouchableOpacity style={styles.forgotPasswordButton}>
                    <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </TouchableOpacity>

                {/* Login Button */}
                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.loginButtonText}>Log In</Text>
                </TouchableOpacity>

                {/* Navigation to Sign Up */}
                <View style={styles.signupContainer}>
                    <Text style={styles.signupText}>Don't have an account? </Text>
                    <TouchableOpacity onPress={() => router.push('/screens/Signup')}>
                        <Text style={styles.signupLink}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f4f6', // Tailwind bg-gray-100
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#1f2937', // Tailwind gray-800
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#6b7280', // Tailwind gray-500
        textAlign: 'center',
        marginBottom: 30,
    },
    input: {
        backgroundColor: 'white',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#e5e7eb', // Tailwind gray-200
        marginBottom: 15,
    },
    forgotPasswordButton: {
        alignSelf: 'flex-end',
        marginBottom: 20,
    },
    forgotPasswordText: {
        color: '#6b7280', // Tailwind gray-500
        fontSize: 14,
    },
    loginButton: {
        backgroundColor: '#ef4444', // Tailwind red-500
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    loginButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    signupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    signupText: {
        color: '#6b7280', // Tailwind gray-500
        fontSize: 16,
    },
    signupLink: {
        color: '#ef4444', // Tailwind red-500
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default LoginScreen;
