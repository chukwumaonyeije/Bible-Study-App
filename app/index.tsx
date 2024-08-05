import { useEffect } from 'react';
import { useRouter, useSegments } from 'expo-router';
import { useAuth } from '../contexts/Auth';

export default function Index() {
  const { user } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.replace('/(app)/home');
    } else {
      router.replace('/(auth)/login');
    }
  }, [user]);

  return null;
}