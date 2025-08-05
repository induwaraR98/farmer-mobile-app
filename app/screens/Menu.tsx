// ===========================================
// File: app/screens/Menu.tsx
// This screen acts as the hamburger menu, displaying a list of
// navigation options for the user.
// ===========================================

import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, useRouter } from 'expo-router';

const MenuScreen = () => {
    const router = useRouter();

    // A function to handle navigation from the menu
    const handleNavigation = (path: string) => {
        router.push(path);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{ title: 'Menu' }} />
            <ScrollView className="flex-1">
                <View style={styles.menuItemContainer}>
                    <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() => handleNavigation('/screens/DiseaseHistory')}
                    >
                        <Text style={styles.menuItemText}>Disease History</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() => handleNavigation('/screens/Profile')}
                    >
                        <Text style={styles.menuItemText}>Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() => handleNavigation('/screens/SafetyTips')}
                    >
                        <Text style={styles.menuItemText}>Safety Tips</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() => handleNavigation('/screens/MyPosts')}
                    >
                        <Text style={styles.menuItemText}>My Posts</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() => handleNavigation('/screens/Settings')}
                    >
                        <Text style={styles.menuItemText}>Settings</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f4f6', // Tailwind bg-gray-100
    },
    menuItemContainer: {
        padding: 10,
    },
    menuItem: {
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 5,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    menuItemText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#374151', // Tailwind gray-700
    },
});

export default MenuScreen;
