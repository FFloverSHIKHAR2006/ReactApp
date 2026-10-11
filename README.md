# Ananth Aahara — Indian Food Ordering App

A responsive, authentic Indian food ordering and discovery mobile application built with **React Native** and **Expo**.

---

## 📱 Features

- **🍽️ Interactive Food Menu & Live Search**:
  - Filter dishes dynamically by category: **Starters**, **Main Course**, **Desserts**, and **Drinks**.
  - Real-time search by dish name or description.
  - Authentic Indian menu with prices, descriptions, and high-quality photography.

- **🚀 First-Time User Onboarding**:
  - Welcoming hero banner with brand story.
  - Profile setup with real-time input validation (name and email validation).

- **👤 Profile Management & Preferences**:
  - Editable user details (First Name, Last Name, Email, Phone Number).
  - Custom email notification toggles (Order updates, Special offers, Newsletter, Security).
  - Cross-platform session reset and confirmation.

- **💾 Offline-First Local Persistence**:
  - Automatically persists user profile and app state across restarts without requiring an external backend.

- **🎨 Tailored Design System**:
  - Warm Indian spice color palette (Turmeric orange, terracotta, rich espresso text, and warm cream background).
  - Crisp, custom vector icons and responsive layouts that look great on iOS, Android, and Web.

---

## 🛠️ Tech Stack

- **Framework**: [React Native](https://reactnative.dev/) with [Expo](https://expo.dev/)
- **Language**: JavaScript (ES6+)
- **Styling**: React Native `StyleSheet` (Zero heavy external CSS dependencies)
- **State & Navigation**: Lightweight state-driven stack routing
- **Storage**: Multi-tier local persistence (`AsyncStorage`)

---

## 📂 Project Structure

```
ReactApp/
├── App.js                      # Root application entry & navigation router
├── app.json                    # Expo configuration & app metadata
├── index.js                    # Application entry point
├── package.json                # Project dependencies and scripts
├── .gitignore                  # Git ignore rules
├── README.md                   # Project documentation
├── assets/
│   ├── icon.png                # App icon
│   ├── splash-icon.png         # Splash screen asset
│   ├── favicon.png             # Web favicon
│   └── images/                 # Bundled high-resolution food photography
└── src/
    ├── constants/
    │   └── colors.js           # Design palette & brand color tokens
    ├── data/
    │   └── menuData.js         # Menu catalog & category datasets
    ├── utils/
    │   └── storage.js          # Cross-platform local persistence layer
    ├── components/
    │   ├── Header.js           # Navigation bar with brand mark & profile avatar
    │   ├── HeroSection.js      # Hero banner with search bar & food visuals
    │   ├── MenuCategory.js     # Category filter buttons
    │   ├── MenuItem.js         # Dish card with thumbnail, pricing & description
    │   └── Icons.js            # Vector iconography
    └── screens/
        ├── OnboardingScreen.js # Registration flow & validation
        ├── HomeScreen.js       # Main menu browsing, search & filtering
        └── ProfileScreen.js    # Profile editing & notification preferences
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- `npm` or `yarn`
- [Expo Go](https://expo.dev/go) app on your mobile device (optional, for physical device testing)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/FFloverSHIKHAR2006/ReactApp.git
   cd ReactApp
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npx expo start
   ```

### Running on Devices:

| Platform | Command / Action |
| :--- | :--- |
| **Physical Phone** | Scan the QR code in terminal using **Expo Go** (Android) or **Camera** (iOS) |
| **Web Browser** | Press `w` in terminal |
| **Android Emulator** | Press `a` in terminal |
| **iOS Simulator** | Press `i` in terminal (macOS required) |

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).
