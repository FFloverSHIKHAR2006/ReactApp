/**
 * Ananth Aahara — Indian Food Ordering App
 * Root application entry point.
 * Uses a clean, robust React-state navigation router adhering to the
 * simplicity constraint ("React Navigation only if necessary... Use React state
 * and small, reusable components. Keep navigation easy to understand").
 */
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  BackHandler,
  Platform,
} from 'react-native';

import Colors from './src/constants/colors';
import { isOnboardingComplete } from './src/utils/storage';

import OnboardingScreen from './src/screens/OnboardingScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [currentScreen, setCurrentScreen] = useState('Onboarding');
  const [history, setHistory] = useState(['Onboarding']);

  // Check persistent onboarding status on launch
  useEffect(() => {
    let isMounted = true;
    (async () => {
      const completed = await isOnboardingComplete();
      if (isMounted) {
        const initial = completed ? 'Home' : 'Onboarding';
        setCurrentScreen(initial);
        setHistory([initial]);
        setLoading(false);
      }
    })();
    return () => {
      isMounted = false;
    };
  }, []);

  // Hardware back button support for Android
  useEffect(() => {
    if (Platform.OS !== 'android') return;

    const onBackPress = () => {
      if (history.length > 1) {
        const nextHistory = history.slice(0, -1);
        const previousScreen = nextHistory[nextHistory.length - 1];
        setHistory(nextHistory);
        setCurrentScreen(previousScreen);
        return true;
      }
      return false;
    };

    const subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      onBackPress
    );
    return () => subscription.remove();
  }, [history]);

  // Standard navigation object passed to all screens
  const navigation = useMemo(
    () => ({
      navigate: (screenName) => {
        setHistory((prev) => [...prev, screenName]);
        setCurrentScreen(screenName);
      },
      goBack: () => {
        setHistory((prev) => {
          if (prev.length <= 1) return prev;
          const next = prev.slice(0, -1);
          setCurrentScreen(next[next.length - 1]);
          return next;
        });
      },
      reset: ({ routes }) => {
        const target = routes?.[0]?.name || 'Home';
        setHistory([target]);
        setCurrentScreen(target);
      },
    }),
    []
  );

  if (loading) {
    return (
      <View style={styles.splash}>
        <ActivityIndicator size="large" color={Colors.primaryOrange} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
      <View style={styles.screenWrapper}>
        {currentScreen === 'Onboarding' && (
          <OnboardingScreen navigation={navigation} />
        )}
        {currentScreen === 'Home' && <HomeScreen navigation={navigation} />}
        {currentScreen === 'Profile' && (
          <ProfileScreen navigation={navigation} />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundCream,
  },
  screenWrapper: {
    flex: 1,
  },
  splash: {
    flex: 1,
    backgroundColor: Colors.backgroundCream,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
