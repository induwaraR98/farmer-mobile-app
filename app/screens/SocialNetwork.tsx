// ===========================================
// File: app/screens/SocialNetwork.tsx
// This is the main screen for the social network feature.
// It displays a scrollable list of posts and now includes a
// floating action button to create new posts.
// ===========================================

import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, useRouter } from 'expo-router';
import PostCard from '../components/PostCard'; // Import the PostCard component

// Mock data for posts.
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
    const router = useRouter();

    const handleCreatePostPress = () => {
        router.push('/screens/CreatePost');
    };

    return (
        <SafeAreaView className="flex-1 bg-gray-100">
            <Stack.Screen
                options={{
                    title: 'Community Feed',
                    headerRight: () => (
                        // A placeholder for the hamburger menu button. We'll add this next.
                        <TouchableOpacity onPress={() => router.push('/screens/Menu')} className="mr-4">
                            <Text className="text-red-500 font-bold text-xl">≡</Text>
                        </TouchableOpacity>
                    )
                }}
            />

            <ScrollView className="flex-1">
                {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </ScrollView>

            {/* Floating Action Button for creating a new post */}
            <TouchableOpacity
                className="absolute bottom-6 right-6 bg-red-500 rounded-full w-14 h-14 items-center justify-center shadow-lg"
                onPress={handleCreatePostPress}
            >
                <Text className="text-white text-3xl font-bold">+</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default SocialNetworkScreen;
