// ===========================================
// File: app/screens/EditProfile.tsx
// This is a placeholder screen for editing a user's profile.
// ===========================================

import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';

const EditProfileScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{ title: 'Edit Profile' }} />
            <Text style={styles.text}>This is the Edit Profile screen.</Text>
            {/* You would add your profile editing form here */}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f3f4f6',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#374151',
    },
});

export default EditProfileScreen;
