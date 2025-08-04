// ===========================================
// File: app/components/PostCard.tsx
// This component displays a single post as a clickable card.
// It is designed to be reusable in a list of posts.
// ===========================================

import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import { useRouter } from 'expo-router';

// Define the shape of a post object.
interface Post {
    id: string;
    imageUrl: string;
    description: string;
}

// Define the props for the PostCard component.
interface PostCardProps {
    post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
    const router = useRouter();

    const handlePress = () => {
        // Navigate to the post details screen, passing the post data as parameters.
        router.push({
            pathname: '/screens/PostDetails',
            params: {
                id: post.id,
                imageUrl: post.imageUrl,
                description: post.description,
            },
        });
    };

    return (
        <TouchableOpacity
            className="bg-white rounded-lg shadow-md m-2 p-3"
            onPress={handlePress}
        >
            <Image
                source={{ uri: post.imageUrl }}
                className="w-full h-48 rounded-lg mb-2"
            />
            <View className="px-1">
                <Text className="text-gray-800 text-base leading-5">
                    {post.description}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default PostCard;
