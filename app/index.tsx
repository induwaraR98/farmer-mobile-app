// ===========================================
// File: app/index.tsx
// This file is the main home screen of the application.
// It uses the HomeButton component to display links to various other screens.
// The HomeButtons now have different colors and are larger in size.
// ===========================================

import { StatusBar } from 'expo-status-bar';
import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import HomeButton from './components/HomeButtons';
import Header from './components/Header';

const HomeScreen = () => {
    return (
        <SafeAreaView className="flex-1 bg-gray-100">
            <Stack.Screen options={{ headerShown: false }} />
            <Header />
            <ScrollView className="flex-1 p-4">
                <View className="items-center justify-center">
                    <Text className="text-3xl font-bold text-gray-800 mt-8 mb-4">
                        Welcome to the App
                    </Text>
                    <Text className="text-base text-gray-600 mb-8 text-center px-4">
                        A utility app for managing tasks, submitting complaints, and more.
                    </Text>

                    <View className="flex-row flex-wrap justify-center items-start">
                        {/* 1. Scan Disease */}
                        <HomeButton title="Scan Disease" href="/screens/ScanDisease" color="red" />

                        {/* 2. Complains */}
                        <HomeButton title="Complains" href="/screens/Complains" color="blue" />

                        {/* 3. Social Network */}
                        <HomeButton title="Social" href="/screens/SocialNetwork" color="green" />

                        {/* 4. Others */}
                        <HomeButton title="Others" href="/screens/Other" color="yellow" />
                    </View>
                </View>
            </ScrollView>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
};

export default HomeScreen;
