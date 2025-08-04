// ===========================================
// File: app/screens/SocialNetwork.tsx
// This is the main screen for the social network feature.
// It displays a scrollable list of posts.
// ===========================================

import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import PostCard from '../components/PostCard'; // Import the new PostCard component

// Mock data for posts. In a real app, you would fetch this from an API.
const posts = [
    {
        id: '1',
        imageUrl: 'https://images.unsplash.com/photo-1518020382113-68f760e98032?q=80&w=1000',
        description: 'Beautiful plant with unique leaves. Does anyone know the name of this species? I found it in my field.',
    },
    {
        id: '2',
        imageUrl: 'https://images.unsplash.com/photo-1518020382113-68f760e98032?q=80&w=1000',
        description: 'Harvesting the new crop! It was a tough season but the results are great. #farminglife #harvest #success',
    },
    {
        id: '3',
        imageUrl: 'https://images.unsplash.com/photo-1518020382113-68f760e98032?q=80&w=1000',
        description: 'Having a problem with pests on my tomato plants. Any advice on organic pesticides?',
    },
    {
        id: '4',
        imageUrl: 'https://images.unsplash.com/photo-1518020382113-68f760e98032?q=80&w=1000',
        description: 'The weather has been perfect for my corn. Fingers crossed for a great yield this year!',
    },
];

const SocialNetworkScreen = () => {
    return (
        <SafeAreaView className="flex-1 bg-gray-100">
            <Stack.Screen options={{ title: 'Social Network' }} />
            <Text className="text-2xl font-bold text-gray-800 my-4 text-center">
                Community Feed
            </Text>

            <ScrollView className="flex-1">
                {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default SocialNetworkScreen;
