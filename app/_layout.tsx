// ===========================================
// File: app/_layout.tsx
// This file needs to be updated to include the new complains screen
// in the navigation stack. Add the new Stack.Screen component.
// ===========================================

import { Stack } from 'expo-router';
import './globals.css';
import React from 'react';

const RootLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="screens/Complains" options={{ title: 'Submit a Complaint' }} />
            {/* Add the new ScanDisease screen here */}
            <Stack.Screen name="screens/ScanDisease" options={{ title: 'Disease Scan' }} />
            {/* You'll add SocialNetwork and Other screens here later */}
            <Stack.Screen name="screens/SocialNetwork" options={{ title: 'Social Network' }} />
            <Stack.Screen name="screens/Other" options={{ title: 'Other Services' }} />
        </Stack>
    );
};
export default RootLayout;