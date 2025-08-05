// ===========================================
// File: app/screens/ComplainList.tsx
// This screen displays a list of user complaints.
// Each list item is clickable and navigates to the details screen.
// ===========================================

import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, useRouter } from 'expo-router';

// Mock data for complaints. In a real app, this would be fetched from an API.
const mockComplains = [
    { id: '1', subject: 'Pest Infestation', status: 'Pending', date: '2025-07-28', reason: 'Pests are destroying my crops.', priority: 'high' },
    { id: '2', subject: 'Water Supply Issue', status: 'In Progress', date: '2025-07-25', reason: 'The irrigation system is not working.', priority: 'medium' },
    { id: '3', subject: 'Fertilizer Quality', status: 'Resolved', date: '2025-07-20', reason: 'The new fertilizer is not effective.', priority: 'low' },
];

const ComplainListScreen = () => {
    const router = useRouter();

    // @ts-ignore
    const renderComplainItem = ({ item }) => (
        <TouchableOpacity
            style={styles.complainItem}
            onPress={() =>
                router.push({
                    pathname: '/screens/ComplainDetails',
                    params: item,
                })
            }
        >
            <View>
                <Text style={styles.complainSubject}>{item.subject}</Text>
                <Text style={styles.complainInfo}>Status: {item.status}</Text>
                <Text style={styles.complainInfo}>Date: {item.date}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{ title: 'My Complains' }} />
            <Text style={styles.headerTitle}>My Complains</Text>
            <FlatList
                data={mockComplains}
                renderItem={renderComplainItem}
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
    headerTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#1f2937',
        textAlign: 'center',
        marginVertical: 10,
    },
    listContent: {
        paddingHorizontal: 10,
    },
    complainItem: {
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
    complainSubject: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1f2937',
    },
    complainInfo: {
        fontSize: 14,
        color: '#6b7280',
        marginTop: 5,
    },
});

export default ComplainListScreen;
