// app/components/Header.tsx

import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Bars3Icon, UserCircleIcon } from 'react-native-heroicons/solid';

const Header = () => {
    return (
        <View className="flex-row items-center justify-between p-4 bg-white shadow-md">
            {/* Hamburger Menu */}
            <TouchableOpacity onPress={() => console.log('Menu button pressed')}>
                <View>
                    <Bars3Icon size={30} color="#374151" />
                </View>
            </TouchableOpacity>

            {/* Profile Icon */}
            <TouchableOpacity onPress={() => console.log('Profile button pressed')}>
                <View>
                    <UserCircleIcon size={30} color="#374151" />
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default Header;