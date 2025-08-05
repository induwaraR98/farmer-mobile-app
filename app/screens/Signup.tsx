// ===========================================
// File: app/screens/Signup.tsx
// This screen provides a form for new users to create an account.
// It includes input fields for email, password, and confirm password.
// ===========================================

import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, useRouter } from 'expo-router';

const SignupScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const router = useRouter();

    // Handle the sign-up process (placeholder)
    const handleSignup = () => {
        if (!email || !password || !confirmPassword) {
            Alert.alert('Incomplete Form', 'Please fill in all fields.');
            return;
        }
        if (password !== confirmPassword) {
            Alert.alert('Passwords Mismatch', 'The passwords you entered do not match.');
            return;
        }
        // In a real app, you would call an authentication service here.
        console.log('Signing up with:', { email, password });
        Alert.alert('Success', 'Sign-up functionality would be implemented here.');
        // Navigate to the main app screen after successful sign-up
        // router.replace('/');
    };

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{ title: 'Sign Up' }} />
            <View style={styles.content}>
                <Text style={styles.title}>Join Our Community</Text>
                <Text style={styles.subtitle}>Create your new account</Text>

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

                {/* Confirm Password Input */}
                <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    placeholderTextColor="#9ca3af"
                    secureTextEntry
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />

                {/* Sign Up Button */}
                <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
                    <Text style={styles.signupButtonText}>Sign Up</Text>
                </TouchableOpacity>

                {/* Navigation to Login */}
                <View style={styles.loginContainer}>
                    <Text style={styles.loginText}>Already have an account? </Text>
                    <TouchableOpacity onPress={() => router.replace('/screens/Login')}>
                        <Text style={styles.loginLink}>Log In</Text>
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
    signupButton: {
        backgroundColor: '#10b981', // Tailwind emerald-500
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        marginTop: 20,
    },
    signupButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    loginContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    loginText: {
        color: '#6b7280', // Tailwind gray-500
        fontSize: 16,
    },
    loginLink: {
        color: '#10b981', // Tailwind emerald-500
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default SignupScreen;
