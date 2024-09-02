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
This README provides step-by-step instructions for setting up Tailwind CSS in React Native, considering different folder structures.
