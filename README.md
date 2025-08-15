# Ruun App 🚗

<img src="https://i.ibb.co/mC3FPqHt/5309441-2.png" width="100" height="100" />

A modern, feature-rich ride-sharing mobile application built with React Native and Expo. This Uber-like frontend template provides a complete foundation for building ride-hailing apps with support for both riders and drivers.

## ✨ Features

- 🗺️ **Interactive Maps** - Google Maps integration with real-time location tracking
- 🚙 **Vehicle Management** - Support for multiple vehicle types (Economy, Comfort, Premium)
- 👤 **User Authentication** - Complete auth flow with OTP verification
- 💬 **Real-time Chat** - In-ride messaging between drivers and passengers
- 📱 **Cross-platform** - Works on both iOS and Android
- 🎨 **Modern UI** - Beautiful, responsive design with NativeWind (Tailwind CSS)
- 📸 **Document Upload** - Camera integration for document verification
- 💰 **Wallet Integration** - Payment and transaction management
- 🧭 **Navigation** - Turn-by-turn directions and route optimization

## 🛠️ Tech Stack

- **Framework:** React Native with Expo (SDK 52)
- **Language:** TypeScript
- **Styling:** NativeWind (Tailwind CSS for React Native)
- **Navigation:** React Navigation 7
- **State Management:** Zustand
- **Forms:** React Hook Form with Yup validation
- **Maps:** React Native Maps
- **Storage:** MMKV for local storage
- **HTTP Client:** Axios with React Query
- **Icons:** Tabler Icons

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (v18 or higher)
- **Yarn** (recommended) or npm
- **Expo CLI** (`npm install -g @expo/cli`)
- **Android Studio** (for Android development)
- **Xcode** (for iOS development, macOS only)
- **Google Maps API Key** (required for map functionality)

## 🚀 Quick Start

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd ruun-template
```

### 2. Install dependencies
```bash
yarn install
# or
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory:
```env
EXPO_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
```

**Getting a Google Maps API Key:**
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the following APIs:
   - Maps SDK for Android
   - Maps SDK for iOS
   - Places API
   - Directions API
4. Create credentials (API Key)
5. Add the API key to your `.env` file

### 4. Run the Development Server

```bash
# Start the Expo development server
yarn start
# or
npm start
```

### 5. Run on Device/Simulator

#### For Android:
```bash
yarn start:android
# or
npm run start:android
```

#### For iOS:
```bash
yarn start:ios
# or
npm run start:ios
```

## 📱 Build for Production

### Android
```bash
expo build:android
```

### iOS
```bash
expo build:ios
```

## 📁 Project Structure

```
src/
├── @core/                 # Core utilities and components
│   ├── components/        # Reusable UI components
│   ├── hooks/            # Custom React hooks
│   ├── store/            # Global state management
│   └── utils/            # Helper functions
├── features/             # Feature-based modules
│   ├── auth/             # Authentication screens & logic
│   ├── ride/             # Ride booking & tracking
│   ├── account/          # User profile & settings
│   └── onboarding/       # App introduction
├── navigator/            # Navigation configuration
└── types.d.ts           # Global type definitions
```

## 🔧 Configuration

### App Configuration
The main app configuration is in `app.config.ts`. Key configurations include:
- App name and version
- Bundle identifiers
- Permissions
- Google Maps API integration
- Plugin configurations

### Styling
This project uses NativeWind (Tailwind CSS for React Native). Configuration is in:
- `tailwind.config.js` - Tailwind configuration
- `global.css` - Global styles
- `nativewind-env.d.ts` - TypeScript definitions

## 🤝 Backend Integration

This frontend is designed to work with any backend API. Key integration points:

1. **Authentication Endpoints** - Configure in `src/@core/axios/`
2. **Google Services** - Map and location services in `src/features/ride/services/`
3. **API Configuration** - Axios instance configuration for your backend

## 🧪 Development Tips

### Running on Physical Device
1. Install the Expo Go app from your device's app store
2. Scan the QR code from the terminal after running `yarn start`

### Debugging
- Use Flipper for advanced debugging
- React Native Debugger for component inspection
- Expo Developer Tools for logs and performance

### Common Issues
- **Metro bundler issues**: Clear cache with `expo start -c`
- **Android build issues**: Clean and rebuild with `cd android && ./gradlew clean`
- **iOS build issues**: Clean build folder in Xcode

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support and questions:
- Open an issue in this repository
- Check the [Expo documentation](https://docs.expo.dev/)
- Review [React Native documentation](https://reactnative.dev/docs/getting-started)

---

Built with ❤️ using React Native and Expo