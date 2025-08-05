// ===========================================
// File: app/screens/Profile.tsx
// This screen acts as the user's profile hub, offering options
// to log in, sign up, and manage their profile and settings.
// ===========================================

import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, useRouter } from 'expo-router';

// A mock state to simulate a logged-in user.
const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('John Doe');

    return { isLoggedIn, userName, setIsLoggedIn };
};

const ProfileScreen = () => {
    const { isLoggedIn, userName } = useAuth();
    const router = useRouter();

    // A function to handle navigation to various screens.
    const handleNavigation = (path: string) => {
        router.push(path);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{ title: 'Profile' }} />
            <ScrollView className="flex-1">
                <View style={styles.section}>
                    {isLoggedIn ? (
                        <View>
                            <Text style={styles.userNameText}>Welcome, {userName}</Text>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => handleNavigation('/screens/EditProfile')}
                            >
                                <Text style={styles.buttonText}>Edit Profile</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => handleNavigation('/screens/Settings')}
                            >
                                <Text style={styles.buttonText}>Settings</Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View>
                            <Text style={styles.signInText}>You are not logged in.</Text>
                            <TouchableOpacity
                                style={styles.primaryButton}
                                onPress={() => handleNavigation('/screens/Login')}
                            >
                                <Text style={styles.primaryButtonText}>Log In</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.secondaryButton}
                                onPress={() => handleNavigation('/screens/Signup')}
                            >
                                <Text style={styles.secondaryButtonText}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f4f6', // Tailwind bg-gray-100
        padding: 10,
    },
    section: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    userNameText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#374151',
        marginBottom: 20,
        textAlign: 'center',
    },
    signInText: {
        fontSize: 18,
        color: '#6b7280',
        marginBottom: 15,
        textAlign: 'center',
    },
    primaryButton: {
        backgroundColor: '#ef4444', // Red-500
        paddingVertical: 15,
        borderRadius: 8,
        marginBottom: 10,
        alignItems: 'center',
    },
    primaryButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    secondaryButton: {
        backgroundColor: 'white',
        paddingVertical: 15,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#ef4444',
        marginBottom: 10,
        alignItems: 'center',
    },
    secondaryButtonText: {
        color: '#ef4444',
        fontSize: 18,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#e5e7eb', // Gray-200
        paddingVertical: 15,
        borderRadius: 8,
        marginBottom: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#374151',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ProfileScreen;
