// ===========================================
// File: app/screens/DiseaseHistoryDetails.tsx
// This screen displays the details of a specific disease scan record.
// ===========================================

import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, useLocalSearchParams } from 'expo-router';

const DiseaseHistoryDetailsScreen = () => {
    const params = useLocalSearchParams();
    const { id, date, plant, disease, result } = params;

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{ title: `Scan Record #${id}` }} />
            <ScrollView style={styles.content}>
                <Text style={styles.title}>{plant}</Text>

                <View style={styles.detailCard}>
                    <View style={styles.detailRow}>
                        <Text style={styles.label}>Scanned On:</Text>
                        <Text style={styles.value}>{date}</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={styles.label}>Detected Disease:</Text>
                        <Text style={styles.value}>{disease}</Text>
                    </View>
                </View>

                <View style={styles.detailCard}>
                    <Text style={styles.resultLabel}>Scan Result:</Text>
                    <Text style={styles.resultText}>{result}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f4f6',
    },
    content: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1f2937',
        marginBottom: 20,
    },
    detailCard: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4b5563',
    },
    value: {
        fontSize: 16,
        color: '#1f2937',
    },
    resultLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1f2937',
        marginBottom: 10,
    },
    resultText: {
        fontSize: 16,
        color: '#4b5563',
    },
});

export default DiseaseHistoryDetailsScreen;
