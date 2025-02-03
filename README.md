# Health Helpline

Health Helpline is a user-friendly mobile application designed to streamline the process of managing healthcare needs. It provides two main functionalities: appointment booking and lab test cart management. This app is a convenient solution for users to handle their healthcare requirements from the comfort of their mobile devices.

## Key Features

### 1. Appointment Booking

- Easy Scheduling: Users can book appointments with doctors or healthcare professionals seamlessly.
- Real-Time Availability: Check and select from available time slots as per your convenience.
- Notifications & Reminders: Get notified about upcoming appointments to avoid missing them.

### 2. Lab Test Cart Management
- Add Lab Tests to Cart: Browse and select from a variety of lab tests offered by the partnered healthcare facilities.
- Customize Your List: Add, remove, or modify tests in the cart before checkout.
- Cost Estimation: View the total cost of selected tests for better planning.

## Benefits of Using Health Helpline
- Convenience: Manage appointments and lab test bookings anytime, anywhere.
- Time-Saving: Avoid long queues and manual processes by scheduling services online.
- Organization: Keep track of your healthcare bookings in one place.

## Technical Details
- Platform: Mobile application (available for Android and iOS).
- Core Technologies
  - React Native
  - Tailwind CSS
  - Laravel (Php)
  - MySql Database
- APIs: Integrated with healthcare provider APIs for real-time data on availability and services.

## Installation
1. Clone the Repository
2. Move to the folder
3. Install all the required dependencies
```bash
npm install
```
4. Run the program
```bash
npm start
```
5. Install Expo in android and ios
6. Open Expo and Scan the code


## How to use
### 1. Download the App
Available on Google Play Store and Apple App Store.
### 2. Book an Appointment:
 - Navigate to the Appointments section.
 - Select the preferred hospital and doctor in healthcare service.
 - Choose a time slot and confirm the booking.
### 3. Add Lab Tests to Cart:
 - Browse the Lab Tests section.
 - Select tests and add them to the cart.
 - Review the cart and proceed to checkout.


----------------------------------------------------------------------------------------------
# Setup Tailwind CSS in React Native with NativeWind

This guide walks you through setting up Tailwind CSS in a React Native project using NativeWind, suitable for projects with different folder structures.

## Prerequisites

Ensure you have Node.js and npm installed on your system.

Installation Steps

### 1. Install NativeWind

```bash
npm install nativewind
```

### 2. Install Babel Preset for Expo.

If you're using Expo, install the babel-preset-expo:

```bash
npm i babel-preset-expo
```

### 3. Configure Babel

Add the NativeWind plugin to your Babel configuration.
Create or update babel.config.js with the following:

```bash
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["nativewind/babel"],
  };
};
```

### 4. Initialize Tailwind CSS

Generate a tailwind.config.js file by running:

```bash
npx tailwindcss init
```

### 5. Configure Tailwind CSS

Update tailwind.config.js based on your folder structure.

#### Folder Structure with src

```bash
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    // "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

#### Folder Structure without src

```bash
/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
 theme: {
   extend: {},
 },
 plugins: [],
};
```

### 6. Create global.d.ts (TypeScript Projects Only)

For TypeScript projects, add type definitions by creating a global.d.ts file in the root of your project with the following content:

```bash
/// <reference types="nativewind/types" />
```

### 7. Start Your Project

After completing these steps, you're ready to use Tailwind CSS in your React Native project. Start your project:

```bash
npm start
```

Usage
Now you can use Tailwind CSS classes in your React Native components using NativeWind.

```bash
# Example
x
import React from 'react';
import { View, Text } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-blue-500">
      <Text className="text-white text-lg font-bold">Hello, Tailwind!</Text>
    </View>
  );
}
```

This README provides step-by-step instructions for setting up Tailwind CSS in React Native, considering different folder structures (with src or without src).


## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

[Nextgen Solution Pvt Ltd](https://nextgennp.co)