/**
 * Ananth Aahara — Storage persistence helper.
 * Uses @react-native-async-storage/async-storage if available,
 * falling back gracefully to window.localStorage (web) or memoryStore
 * to guarantee that onboarding and profile data persist reliably
 * without crashing if optional native modules are unlinked.
 */

const KEYS = {
  ONBOARDING_COMPLETE: '@aa_onboarding_complete',
  PROFILE: '@aa_profile',
};

// In-memory fallback dictionary for persistent session state
const memoryStore = {};

let nativeStorage = null;
try {
  // Dynamically resolve AsyncStorage if installed
  const mod = require('@react-native-async-storage/async-storage');
  nativeStorage = mod?.default || mod;
} catch {
  nativeStorage = null;
}

const Storage = {
  async getItem(key) {
    if (nativeStorage) {
      return await nativeStorage.getItem(key);
    }
    if (typeof window !== 'undefined' && window?.localStorage) {
      return window.localStorage.getItem(key);
    }
    return Object.prototype.hasOwnProperty.call(memoryStore, key) ? memoryStore[key] : null;
  },

  async setItem(key, value) {
    if (nativeStorage) {
      return await nativeStorage.setItem(key, value);
    }
    if (typeof window !== 'undefined' && window?.localStorage) {
      window.localStorage.setItem(key, value);
      return;
    }
    memoryStore[key] = String(value);
  },

  async removeItem(key) {
    if (nativeStorage) {
      return await nativeStorage.removeItem(key);
    }
    if (typeof window !== 'undefined' && window?.localStorage) {
      window.localStorage.removeItem(key);
      return;
    }
    delete memoryStore[key];
  },
};

/* ---------- Onboarding Status ---------- */

export async function isOnboardingComplete() {
  try {
    const value = await Storage.getItem(KEYS.ONBOARDING_COMPLETE);
    return value === 'true';
  } catch (err) {
    console.warn('Error reading onboarding status:', err);
    return false;
  }
}

export async function setOnboardingComplete() {
  try {
    await Storage.setItem(KEYS.ONBOARDING_COMPLETE, 'true');
  } catch (err) {
    console.warn('Error setting onboarding status:', err);
  }
}

export async function clearOnboarding() {
  try {
    await Storage.removeItem(KEYS.ONBOARDING_COMPLETE);
  } catch (err) {
    console.warn('Error clearing onboarding status:', err);
  }
}

/* ---------- Profile Information ---------- */

export async function getProfile() {
  try {
    const json = await Storage.getItem(KEYS.PROFILE);
    return json ? JSON.parse(json) : null;
  } catch (err) {
    console.warn('Error reading profile:', err);
    return null;
  }
}

export async function saveProfile(profile) {
  try {
    await Storage.setItem(KEYS.PROFILE, JSON.stringify(profile));
  } catch (err) {
    console.warn('Error saving profile:', err);
  }
}

export async function clearProfile() {
  try {
    await Storage.removeItem(KEYS.PROFILE);
  } catch (err) {
    console.warn('Error clearing profile:', err);
  }
}
