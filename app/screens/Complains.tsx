// ===========================================
// File: app/complains.tsx
// This is the main component for the complains form screen.
// It includes the form state, UI components, and button handlers.
// ===========================================

import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert, Image } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';

// Define a type for the priority options
type Priority = 'low' | 'medium' | 'high';

const ComplainsScreen = () => {
    const [name, setName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [priority, setPriority] = useState<Priority>('medium');
    const [reason, setReason] = useState('');
    const [attachments, setAttachments] = useState<string[]>([]);

    // Function to handle image picking
    const pickImage = async () => {
        // Request permission to access the media library
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permission required', 'Permission to access media library is needed to upload images.');
            return;
        }

        // Launch the image picker
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setAttachments(prev => [...prev, result.assets[0].uri]);
        }
    };

    const handleSend = () => {
        // For now, we'll just log the form data to the console.
        // In a real application, you would send this to a backend API.
        console.log({
            name,
            contactNumber,
            priority,
            reason,
            attachments,
        });
        Alert.alert('Complaint Sent', 'Your complaint has been submitted successfully!');
        handleReset();
    };

    const handleReset = () => {
        setName('');
        setContactNumber('');
        setPriority('medium');
        setReason('');
        setAttachments([]);
    };

    return (
        <SafeAreaView className="flex-1 bg-gray-100 p-4">
            <Stack.Screen options={{ title: 'Submit a Complaint' }} />

            <ScrollView className="flex-1">
                <Text className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    Complaint Form
                </Text>

                {/* Name Input */}
                <View className="mb-4">
                    <Text className="text-base font-semibold text-gray-700 mb-1">Name</Text>
                    <TextInput
                        className="border border-gray-300 rounded-lg p-3 bg-white text-base"
                        placeholder="Enter your full name"
                        value={name}
                        onChangeText={setName}
                    />
                </View>

                {/* Contact Number Input */}
                <View className="mb-4">
                    <Text className="text-base font-semibold text-gray-700 mb-1">Contact Number</Text>
                    <TextInput
                        className="border border-gray-300 rounded-lg p-3 bg-white text-base"
                        placeholder="e.g., 123-456-7890"
                        keyboardType="phone-pad"
                        value={contactNumber}
                        onChangeText={setContactNumber}
                    />
                </View>

                {/* Priority Dropdown */}
                <View className="mb-4">
                    <Text className="text-base font-semibold text-gray-700 mb-1">Priority</Text>
                    <View className="border border-gray-300 rounded-lg bg-white overflow-hidden">
                        <Picker
                            selectedValue={priority}
                            onValueChange={(itemValue: Priority) => setPriority(itemValue)}
                            style={{ height: 50, color: 'rgb(55 65 81)' }} // Tailwind color text-gray-700
                        >
                            <Picker.Item label="Low" value="low" />
                            <Picker.Item label="Medium" value="medium" />
                            <Picker.Item label="High" value="high" />
                        </Picker>
                    </View>
                </View>

                {/* Reason Textarea */}
                <View className="mb-4">
                    <Text className="text-base font-semibold text-gray-700 mb-1">Reason for Complaint</Text>
                    <TextInput
                        className="border border-gray-300 rounded-lg p-3 bg-white text-base h-32"
                        placeholder="Describe your complaint here..."
                        multiline
                        textAlignVertical="top"
                        value={reason}
                        onChangeText={setReason}
                    />
                </View>

                {/* Attachments Section */}
                <View className="mb-6">
                    <Text className="text-base font-semibold text-gray-700 mb-2">Attachments</Text>
                    <TouchableOpacity
                        onPress={pickImage}
                        className="bg-gray-200 border-2 border-dashed border-gray-400 rounded-lg p-5 items-center justify-center mb-2"
                    >
                        <Text className="text-gray-600 font-bold">Upload File or Image</Text>
                    </TouchableOpacity>

                    {attachments.length > 0 && (
                        <View className="mt-2">
                            <Text className="text-sm text-gray-500 mb-2">
                                {attachments.length} file(s) attached.
                            </Text>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                {attachments.map((uri, index) => (
                                    <View key={index} className="mr-2">
                                        <Image
                                            source={{ uri }}
                                            style={{ width: 100, height: 100 }}
                                            className="rounded-lg"
                                        />
                                    </View>
                                ))}
                            </ScrollView>
                        </View>
                    )}
                </View>

                {/* Action Buttons */}
                <View className="flex-row justify-between mb-4">
                    <TouchableOpacity
                        className="flex-1 bg-gray-500 rounded-lg p-4 items-center mr-2 shadow-md"
                        onPress={handleReset}
                    >
                        <Text className="text-white text-lg font-bold">Reset</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className="flex-1 bg-red-500 rounded-lg p-4 items-center ml-2 shadow-md"
                        onPress={handleSend}
                    >
                        <Text className="text-white text-lg font-bold">Send</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ComplainsScreen;