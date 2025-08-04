// ===========================================
// File: app/components/HomeButton.tsx
// This component provides a styled, reusable button for navigating
// between screens. It now accepts a `title`, `href`, and `color` prop.
// ===========================================

import { Link, LinkProps } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// Define the props for the HomeButton component.
interface HomeButtonProps {
    title: string;
    href: LinkProps['href'];
    // Added a color prop to allow different background colors.
    color: string;
}

const HomeButton: React.FC<HomeButtonProps> = ({ title, href, color }) => {
    return (
        <Link href={href} asChild>
            <TouchableOpacity
                className={`bg-${color}-500 rounded-lg p-6 m-2 w-40 h-40 items-center justify-center shadow-md`}
            >
                <Text className="text-white text-lg font-bold text-center">{title}</Text>
            </TouchableOpacity>
        </Link>
    );
};

export default HomeButton;
