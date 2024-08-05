import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuth } from '../../contexts/Auth';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const { user, signOut } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.replace('/(auth)/login');
  };

  return (
    <View>
      <Text>Welcome to the Bible Study App, {user?.email}!</Text>
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
}