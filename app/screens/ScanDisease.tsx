// ===========================================
// File: app/screens/ScanDisease.tsx
// This screen uses the device's camera to capture a photo
// and provides buttons to check, clear, or upload the image.
// This version uses the modern CameraView component and hooks.
// ===========================================

import { View, Text, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import React, { useState, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import { CameraView, useCameraPermissions } from 'expo-camera';

const ScanDiseaseScreen = () => {
    const [permission, requestPermission] = useCameraPermissions();
    const [imageUri, setImageUri] = useState<string | null>(null);
    const cameraRef = useRef<CameraView>(null);

    // Function to take a photo
    const handleCapture = async () => {
        if (cameraRef.current) {
            const photo = await cameraRef.current.takePictureAsync();
            if (photo && photo.uri) {
                setImageUri(photo.uri);
            }
        }
    };

    // Function to clear the captured photo
    const handleClear = () => {
        setImageUri(null);
    };

    // Function to simulate checking the photo
    const handleCheck = () => {
        if (imageUri) {
            Alert.alert('Checking...', 'This would send the image for analysis.');
        } else {
            Alert.alert('No image', 'Please take a picture first.');
        }
    };

    // Function to simulate uploading the photo
    const handleUpload = () => {
        if (imageUri) {
            Alert.alert('Uploading...', 'This would upload the image to a server.');
        } else {
            Alert.alert('No image', 'Please take a picture first.');
        }
    };

    if (!permission) {
        // Camera permissions are still loading.
        return (
            <SafeAreaView style={styles.container}>
                <Text className="text-xl text-center">Requesting camera permission...</Text>
            </SafeAreaView>
        );
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet.
        return (
            <SafeAreaView style={styles.container}>
                <Text className="text-xl text-center">We need your permission to show the camera</Text>
                <TouchableOpacity style={styles.button} onPress={requestPermission}>
                    <Text style={styles.buttonText}>Grant Permission</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{ title: 'Disease Scan' }} />
            <Text className="text-2xl font-bold text-gray-800 my-4 text-center">
                Scan Plant Disease
            </Text>

            {/* Camera View */}
            <View style={styles.cameraContainer}>
                {imageUri ? (
                    <Image source={{ uri: imageUri }} style={styles.previewImage} />
                ) : (
                    <CameraView
                        style={styles.camera}
                        ref={cameraRef}
                        facing={'back'}
                    />
                )}
            </View>

            {/* Control Buttons */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleCapture}>
                    <Text style={styles.buttonText}>Capture</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleClear}>
                    <Text style={styles.buttonText}>Clear</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleCheck}>
                    <Text style={styles.buttonText}>Check</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleUpload}>
                    <Text style={styles.buttonText}>Upload</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f4f6', // Equivalent to Tailwind's bg-gray-100
    },
    cameraContainer: {
        flex: 1,
        marginHorizontal: 16,
        marginVertical: 10,
        borderRadius: 12,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    camera: {
        flex: 1,
    },
    previewImage: {
        flex: 1,
        resizeMode: 'contain',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        backgroundColor: '#ef4444', // Red-500
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        marginHorizontal: 4,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default ScanDiseaseScreen;
