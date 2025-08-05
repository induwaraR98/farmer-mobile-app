// ===========================================
// File: app/screens/SafetyTipsDetails.tsx
// This screen displays the full details of a specific safety tip.
// ===========================================

import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, useLocalSearchParams } from 'expo-router';

const SafetyTipsDetailsScreen = () => {
    const params = useLocalSearchParams();
    const { title, date, content } = params;

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{ title: 'Tip Details' }} />
            <ScrollView style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.date}>Published: {date}</Text>
                <Text style={styles.contentBody}>{content}</Text>
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
        marginBottom: 10,
    },
    date: {
        fontSize: 14,
        color: '#6b7280',
        marginBottom: 20,
    },
    contentBody: {
        fontSize: 16,
        color: '#4b5563',
        lineHeight: 24,
    },
});

export default SafetyTipsDetailsScreen;
