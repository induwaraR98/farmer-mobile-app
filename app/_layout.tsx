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
            {/* The index screen is the home screen, with no header. */}
            <Stack.Screen name="index" options={{ headerShown: false }} />

            {/* The Complains screen for submitting complaint forms. */}
            <Stack.Screen name="screens/Complains" options={{ title: 'Submit a Complaint' }} />

            {/* The ScanDisease screen for using the camera to scan for diseases. */}
            <Stack.Screen name="screens/ScanDisease" options={{ title: 'Disease Scan' }} />

            {/* The SocialNetwork screen, which shows a list of posts. */}
            <Stack.Screen name="screens/SocialNetwork" options={{ title: 'Social Network' }} />

            {/* The PostDetails screen, which shows the details of a single post. */}
            <Stack.Screen name="screens/PostDetails" options={{ title: 'Post Details' }} />

            {/* The CreatePost screen, for adding new posts to the social feed. */}
            <Stack.Screen name="screens/CreatePost" options={{ title: 'New Post' }} />

            {/* The Menu screen, for displaying the hamburger menu options. */}
            <Stack.Screen name="screens/Menu" options={{ title: 'Menu' }} />

            {/* A placeholder for other services. */}
            <Stack.Screen name="screens/Other" options={{ title: 'Other Services' }} />
        </Stack>
    );
};

export default RootLayout;
