// ===========================================
// File: app/screens/ComplainDetails.tsx
// This screen displays the full details of a specific complaint.
// It receives the complaint data via navigation parameters.
// ===========================================

import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, useLocalSearchParams } from 'expo-router';

const ComplainDetailsScreen = () => {
    // Get the complaint data from the navigation parameters
    const params = useLocalSearchParams();
    const { id, subject, status, date, reason, priority } = params;

    if (!id) {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.errorText}>Complaint not found.</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{ title: `Complaint #${id}` }} />
            <ScrollView style={styles.content}>
                <Text style={styles.subject}>{subject}</Text>

                <View style={styles.detailCard}>
                    <View style={styles.detailRow}>
                        <Text style={styles.label}>Status:</Text>
                        <Text style={styles.value}>{status}</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={styles.label}>Priority:</Text>
                        <Text style={styles.value}>{priority}</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={styles.label}>Date Submitted:</Text>
                        <Text style={styles.value}>{date}</Text>
                    </View>
                </View>

                <View style={styles.detailCard}>
                    <Text style={styles.reasonLabel}>Reason for Complaint:</Text>
                    <Text style={styles.reasonText}>{reason}</Text>
                </View>
                {/* You can add a section for attachments, comments, etc., here */}
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
    errorText: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 50,
        color: 'red',
    },
    subject: {
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
    reasonLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1f2937',
        marginBottom: 10,
    },
    reasonText: {
        fontSize: 16,
        color: '#4b5563',
    },
});

export default ComplainDetailsScreen;
