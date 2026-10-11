# Ananth Aahara — Indian Food Ordering App

A complete, functional, and elegant Indian restaurant menu mobile application named **Ananth Aahara**, built with **React Native** and **Expo**.

The app faithfully implements the design system, wireframe structure, and feature requirements across the **Home**, **Onboarding**, and **Profile** screens. It features authentic Indian cuisine, a curated warm spice color palette, local persistence, real-time search, category filters, and zero external backend or API requirements.

---

## Table of Contents

- [Overview & Architecture](#overview--architecture)
- [Design System & Palette](#design-system--palette)
- [Application Screens & Features](#application-screens--features)
  - [1. Onboarding Screen](#1-onboarding-screen)
  - [2. Home Screen](#2-home-screen)
  - [3. Profile Screen](#3-profile-screen)
- [Sample Menu Data](#sample-menu-data)
- [Wireframe Specification](#wireframe-specification)
- [Project File Structure](#project-file-structure)
- [Installation & Running](#installation--running)
- [Git Submission Commands](#git-submission-commands)

---

## Overview & Architecture

Designed following the strict simplicity guidelines of the project specification:
- **React Native with Expo** using modern functional components and hooks (`useState`, `useEffect`, `useMemo`, `useCallback`).
- **Standard Styling**: Pure React Native `StyleSheet` with no heavyweight UI frameworks or external CSS layers.
- **Clean State Navigation**: A lightweight, robust stack router embedded in `App.js` providing seamless transitions (`navigate`, `goBack`, `reset`) across all 3 screens without peer dependency conflicts.
- **Universal Persistence**: Local persistence helper in `src/utils/storage.js` with multi-tier storage handling (AsyncStorage, localStorage, and session memory store).
- **Zero-Dependency Vector Icons**: Pixel-perfect vector icons built with React Native primitives in `src/components/Icons.js`. Strictly zero emojis used as interface controls.
- **Local Assets**: High-resolution photography bundled locally under `assets/images/`.

---

## Design System & Palette

All brand colors are defined centrally in `src/constants/colors.js`:

| Token | Hex Code | Visual Role |
|:------|:---------|:------------|
| **Primary Orange** | `#FC8019` | Hero banners, brand logo mark, active category buttons |
| **Alternative Orange** | `#FF8000` | Secondary brand accents and highlight elements |
| **CTA Coral** | `#F63440` | Critical actions (Onboarding Continue, Profile Log out) |
| **Background Cream** | `#FDF6ED` | Primary background canvas across all screens |
| **White** | `#FFFFFF` | Form inputs, header bar, card panels |
| **Primary Text** | `#30251F` | Deep espresso for headings, titles, dish names |
| **Secondary Text** | `#74675F` | Warm taupe for descriptions, subtitles, field labels |
| **Borders & Dividers** | `#E8DCD0` | Subtle hairline dividers, category and input borders |

### UI Design Rules Adhered to:
- **No pill-shaped buttons**: All buttons and filters are rectangular with slightly rounded corners (6 to 10 px radius).
- **Consistent input styling**: 48px standard input height, 1px subtle borders, 14px horizontal padding, and distinct red borders on validation error.
- **Strict alignment grid**: Logo and profile icons are vertically centered in the navigation header.
- **High-contrast typography**: Legible font hierarchy with clear heading-to-body scaling.

---

## Application Screens & Features

### 1. Onboarding Screen
- **Brand Presentation**: Ananth Aahara logo mark and wordmark at the top.
- **Hero Presentation**: Warm orange hero panel featuring the brand tagline *"Authentic Indian Flavours"* and restaurant description.
- **Input Fields**: First Name and Email address inputs with real-time validation.
- **Validation Rules**:
  - Name cannot be empty.
  - Email must follow a valid email regex pattern (`user@domain.ext`).
  - Helpful error messages appear inline under each invalid input.
  - The rectangular coral-red Continue button is disabled until valid.
- **Persistence & Routing**: Saves user profile details locally and resets navigation straight to Home.

### 2. Home Screen
Constructed into four distinct sections aligned to the reference wireframe:
1. **Navigation Header**:
   - Left: Ananth Aahara vector logo mark and wordmark.
   - Right: Gender-neutral circular profile button.
   - Center aligned, tapping profile navigates to the Profile screen.
2. **Hero Section**:
   - Orange banner with title *"Ananth Aahara"*, subtitle *"Authentic Indian Flavours"*, and welcoming description.
   - High-quality Indian food photograph aligned to the right (adapts responsively).
   - Live Search control with vector magnifying glass filtering dishes by name or description.
3. **Menu Breakdown (Category Filters)**:
   - Heading: `ORDER YOUR FAVOURITES`.
   - Four rectangular category buttons: **Starters**, **Main Course**, **Desserts**, **Drinks** (plus **All**).
   - Active category highlighted in solid orange `#FC8019`; inactive in cream with subtle borders.
   - Tapping dynamically filters the menu list below.
4. **Scrollable Food Menu**:
   - Vertically scrollable `FlatList`.
   - Each row displays: Dish name (bold espresso), description, price formatted in Indian rupees (`₹`), and dish photo on the right.

### 3. Profile Screen
- **Top Header**: Back navigation chevron (`<`) and brand mark.
- **Avatar Section**: Gender-neutral profile avatar displaying user initials or silhouette, with rectangular *Change* and *Remove* controls.
- **Personal Information Form**:
  - First Name (required)
  - Last Name
  - Email (required, regex-validated)
  - Phone Number
- **Email Notification Preferences**: Checkbox rows for:
  - Order updates
  - Account and security updates
  - Special offers
  - Newsletter
- **Action Controls**:
  - **Log out** (Rectangular CTA Coral `#F63440`): Clears local profile and onboarding state, routing back to Onboarding.
  - **Discard changes** (Rectangular outlined): Restores previously saved profile values.
  - **Save changes** (Rectangular orange `#FC8019`): Validates and persists updates, displaying a green confirmation banner.

---

## Sample Menu Data

Stored centrally in `src/data/menuData.js`:

| Dish | Category | Price | Description |
|:-----|:---------|:------|:------------|
| **Paneer Tikka** | Starters | ₹220 | Marinated paneer cubes grilled with aromatic Indian spices and peppers. |
| **Veg Samosa** | Starters | ₹60 | Crispy pastry filled with spiced potatoes and green peas. |
| **Masala Dosa** | Main Course | ₹140 | Golden, crispy dosa filled with seasoned potato masala, served with sambar and chutneys. |
| **Paneer Butter Masala** | Main Course | ₹240 | Soft paneer cooked in a creamy tomato gravy with warming Indian spices. |
| **Veg Biryani** | Main Course | ₹190 | Fragrant basmati rice layered with vegetables, herbs, and aromatic spices. |
| **Gulab Jamun** | Desserts | ₹80 | Soft milk-solid dumplings soaked in fragrant sugar syrup. |
| **Masala Chai** | Drinks | ₹35 | Freshly brewed Indian tea infused with ginger and warming spices. |
| **Sweet Lassi** | Drinks | ₹70 | A refreshing yogurt-based drink with a touch of sweetness. |

---

## Wireframe Specification

The architectural wireframe following the reference layout is stored in two formats:
- **Exported Image**: `docs/ananth-aahara-wireframe.jpg`
- **Editable Vector Specification**: `docs/ananth-aahara-wireframe.svg` (contains editable named layers, grayscale layout boxes, and side annotation callouts)

---

## Project File Structure

```
CCP/
├── App.js                      # Root app entry point & state-based navigation
├── app.json                    # Expo configuration & app metadata
├── index.js                    # Expo root entry point
├── package.json                # Project dependencies and npm scripts
├── .gitignore                  # Git ignore rules for React Native & Expo
├── README.md                   # Complete documentation & run guide
├── docs/
│   ├── ananth-aahara-wireframe.jpg   # Exported wireframe image deliverable
│   └── ananth-aahara-wireframe.svg   # Editable vector wireframe specification
├── assets/
│   ├── icon.png
│   ├── splash-icon.png
│   ├── favicon.png
│   └── images/                 # Local high-quality food photography
│       ├── hero-food.jpg
│       ├── paneer-tikka.jpg
│       ├── veg-samosa.jpg
│       ├── masala-dosa.jpg
│       ├── paneer-butter-masala.jpg
│       ├── veg-biryani.jpg
│       ├── gulab-jamun.jpg
│       ├── masala-chai.jpg
│       └── sweet-lassi.jpg
└── src/
    ├── constants/
    │   └── colors.js           # Central color tokens
    ├── data/
    │   └── menuData.js         # Single source of truth for food dishes & categories
    ├── utils/
    │   └── storage.js          # Universal persistence helpers
    ├── components/
    │   ├── Header.js           # Top nav bar with logo and profile button
    │   ├── HeroSection.js      # Orange hero banner with photo and search control
    │   ├── MenuCategory.js     # Rectangular category filter buttons
    │   ├── MenuItem.js         # Menu dish row item with thumbnail & ₹ price
    │   └── Icons.js            # Zero-dependency vector icons (no emojis)
    └── screens/
        ├── OnboardingScreen.js # First launch registration & validation
        ├── HomeScreen.js       # Main menu browsing, search, and category filter
        └── ProfileScreen.js    # Personal information, notifications, save/logout
```

---

## Installation & Running

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or later recommended)
- `npm` or `yarn`

### Setup Steps

```bash
# 1. Clone the repository
git clone <repository-url>
cd CCP

# 2. Install dependencies
npm install

# 3. Start the Expo development server
npx expo start
```

### Running on Targets:
- **Mobile (Expo Go)**: Scan the generated QR code using the Expo Go app on your iOS (Camera app) or Android device.
- **Android Emulator**: Press `a` in the terminal.
- **iOS Simulator**: Press `i` in the terminal (macOS only).
- **Web Browser**: Press `w` in the terminal.

---

## Git Submission Commands

To commit and push all project files to your GitHub repository:

```bash
# Check repository status
git status

# Add all project files
git add .

# Commit with a descriptive message
git commit -m "feat: complete Ananth Aahara Indian food ordering app with onboarding, home, and profile screens"

# Set main branch
git branch -M main

# Link your GitHub remote (if not already connected)
git remote add origin https://github.com/FFLoverSHIKHAR2006/ReactApp.git

# Push changes to GitHub
git push -u origin main
```
