// ===========================================
// File: app/screens/PostDetails.tsx
// This screen displays the full details of a single post.
// It receives post data through navigation parameters.
// ===========================================

import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, useLocalSearchParams } from 'expo-router';

const PostDetailsScreen = () => {
    // Use useLocalSearchParams to get the post data from the navigation params.
    const { id, imageUrl, description } = useLocalSearchParams();

    // If there's no post data, display an error message.
    if (!imageUrl || !description) {
        return (
            <SafeAreaView className="flex-1 justify-center items-center bg-gray-100">
                <Text className="text-lg text-gray-800">Post not found.</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView className="flex-1 bg-gray-100">
            <Stack.Screen options={{ title: 'Post Details' }} />

            <ScrollView>
                <Image
                    source={{ uri: imageUrl as string }}
                    className="w-full h-80"
                    resizeMode="cover"
                />
                <View className="p-4 bg-white">
                    <Text className="text-gray-800 text-base leading-6">
                        {description as string}
                    </Text>
                    {/* Add more details here like comments, likes, etc. */}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default PostDetailsScreen;
