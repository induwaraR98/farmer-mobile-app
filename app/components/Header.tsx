// ===========================================
// File: app/components/Header.tsx
// This component provides a custom header with a hamburger menu
// and a profile icon. The buttons now navigate to their respective screens.
// ===========================================

import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Bars3Icon, UserCircleIcon } from 'react-native-heroicons/solid';
import { useRouter } from 'expo-router';

const Header = () => {
    const router = useRouter();

    return (
        <View className="flex-row items-center justify-between p-4 bg-white shadow-md">
            {/* Hamburger Menu */}
            <TouchableOpacity onPress={() => router.push('/screens/Menu')}>
                <View>
                    <Bars3Icon size={30} color="#374151" />
                </View>
            </TouchableOpacity>

            {/* Profile Icon */}
            <TouchableOpacity onPress={() => router.push('/screens/Profile')}>
                <View>
                    <UserCircleIcon size={30} color="#374151" />
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default Header;
