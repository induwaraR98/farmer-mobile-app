// ===========================================
// File: app/screens/CreatePost.tsx
// This screen provides a form for users to create a new post
// with an image and a description.
// ===========================================

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, useRouter } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';

const CreatePostScreen = () => {
    const [description, setDescription] = useState('');
    const [imageUri, setImageUri] = useState<string | null>(null);
    const router = useRouter();

    // Function to handle image picking
    const pickImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permission required', 'Permission to access media library is needed to upload images.');
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImageUri(result.assets[0].uri);
        }
    };

    const handlePost = () => {
        if (!description || !imageUri) {
            Alert.alert('Incomplete Post', 'Please add an image and a description.');
            return;
        }

        // In a real application, you would send this to a backend API.
        console.log('New post submitted:', { description, imageUri });
        Alert.alert('Post Created', 'Your post has been shared successfully!');

        // Navigate back to the social network screen
        router.back();
    };

    return (
        <SafeAreaView className="flex-1 bg-gray-100 p-4">
            <Stack.Screen options={{ title: 'Create Post' }} />

            <Text className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Create a New Post
            </Text>

            {/* Image Picker */}
            <TouchableOpacity
                className="bg-gray-200 border-2 border-dashed border-gray-400 rounded-lg h-48 items-center justify-center mb-4"
                onPress={pickImage}
            >
                {imageUri ? (
                    <Image source={{ uri: imageUri }} className="w-full h-full rounded-lg" />
                ) : (
                    <Text className="text-gray-600 font-bold">Tap to add an image</Text>
                )}
            </TouchableOpacity>

            {/* Description Input */}
            <View className="mb-4">
                <TextInput
                    className="border border-gray-300 rounded-lg p-3 bg-white text-base h-32"
                    placeholder="What's on your mind?"
                    multiline
                    textAlignVertical="top"
                    value={description}
                    onChangeText={setDescription}
                />
            </View>

            {/* Post Button */}
            <TouchableOpacity
                className="bg-red-500 rounded-lg p-4 items-center shadow-md mt-auto"
                onPress={handlePost}
            >
                <Text className="text-white text-lg font-bold">Share Post</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default CreatePostScreen;
