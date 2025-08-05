// ===========================================
// File: app/screens/SafetyTipsList.tsx
// This screen displays a list of safety tips.
// ===========================================

import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, useRouter } from 'expo-router';

// Mock data for safety tips.
const mockSafetyTips = [
    { id: '1', title: 'Using Pesticides Safely', date: '2025-08-01', content: 'Always wear protective gear, read the label, and store chemicals in a secure location away from children and pets. Avoid spraying on windy days to prevent drift. Dispose of empty containers properly according to local regulations.' },
    { id: '2', title: 'Handling Farm Machinery', date: '2025-07-29', content: 'Ensure all guards and shields are in place before operating machinery. Never wear loose clothing around moving parts. Turn off the engine and remove the key before attempting to clear jams or perform maintenance. Regularly inspect and maintain your equipment.' },
    { id: '3', title: 'Proper Hydration in the Field', date: '2025-07-25', content: 'Drink plenty of water throughout the day, especially on hot days. Take frequent breaks in the shade. Wear a hat and light-colored, loose-fitting clothing to protect yourself from the sun. Recognize the signs of heat exhaustion and heatstroke.' },
];

const SafetyTipsListScreen = () => {
    const router = useRouter();

    const renderTipItem = ({ item }) => (
        <TouchableOpacity
            style={styles.listItem}
            onPress={() =>
                router.push({
                    pathname: '/screens/SafetyTipsDetails',
                    params: item,
                })
            }
        >
            <View>
                <Text style={styles.listTitle}>{item.title}</Text>
                <Text style={styles.listDate}>Published: {item.date}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{ title: 'Safety Tips' }} />
            <FlatList
                data={mockSafetyTips}
                renderItem={renderTipItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContent}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f4f6',
    },
    listContent: {
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    listItem: {
        backgroundColor: 'white',
        padding: 15,
        marginVertical: 8,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    listTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1f2937',
    },
    listDate: {
        fontSize: 14,
        color: '#6b7280',
        marginTop: 5,
    },
});

export default SafetyTipsListScreen;
