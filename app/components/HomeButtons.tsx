// app/components/HomeButton.tsx

import { TouchableOpacity, Text } from 'react-native';
import React from 'react';
import { TailwindProvider } from 'tailwindcss-react-native';

interface HomeButtonProps {
    title: string;
    onPress: () => void;
}

const HomeButton = ({ title, onPress }: HomeButtonProps) => {
    return (
        <TailwindProvider>
            <TouchableOpacity
                className="bg-green-500 rounded-lg p-5 m-2 items-center justify-center shadow-lg w-40 h-40"
                onPress={onPress}
            >
                <Text className="text-white text-lg font-bold">{title}</Text>
            </TouchableOpacity>
        </TailwindProvider>
    );
};

export default HomeButton;