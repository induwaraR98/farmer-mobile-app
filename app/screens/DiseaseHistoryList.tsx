// ===========================================
// File: app/screens/DiseaseHistoryList.tsx
// This screen displays a list of past disease scan results.
// ===========================================

import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, useRouter } from 'expo-router';

// Mock data for disease history.
const mockHistory = [
    { id: '1', date: '2025-08-02', plant: 'Tomato Plant', disease: 'Late Blight', result: 'High probability of Late Blight. Recommended treatment: apply copper fungicide.' },
    { id: '2', date: '2025-07-30', plant: 'Corn', disease: 'Healthy', result: 'No signs of disease detected. The plant appears healthy.' },
    { id: '3', date: '2025-07-28', plant: 'Potato', disease: 'Early Blight', result: 'Early Blight detected. Recommended treatment: remove infected leaves and use a fungicide.' },
];

const DiseaseHistoryListScreen = () => {
    const router = useRouter();

    // @ts-ignore
    const renderHistoryItem = ({ item }) => (
        <TouchableOpacity
            style={styles.listItem}
            onPress={() =>
                router.push({
                    pathname: '/screens/DiseaseHistoryDetails',
                    params: item,
                })
            }
        >
            <View>
                <Text style={styles.listTitle}>{item.plant}</Text>
                <Text style={styles.listDisease}>Disease: {item.disease}</Text>
                <Text style={styles.listDate}>Scanned on: {item.date}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{ title: 'Disease History' }} />
            <FlatList
                data={mockHistory}
                renderItem={renderHistoryItem}
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
    listDisease: {
        fontSize: 16,
        color: '#4b5563',
        marginTop: 5,
    },
    listDate: {
        fontSize: 14,
        color: '#6b7280',
        marginTop: 5,
    },
});

export default DiseaseHistoryListScreen;
