import { ExpoConfig, ConfigContext } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  name: "ruun",
  slug: "ruun",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "automatic",
  newArchEnabled: true,
  owner: "alessmi",
  scheme: "ruun",
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.alessmi.ruun",
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    package: "com.alessmi.ruun",
    config: {
      googleMaps: {
        apiKey: process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY || "",
      },
    },
    permissions: [
      "android.permission.ACCESS_COARSE_LOCATION",
      "android.permission.ACCESS_FINE_LOCATION",
      "android.permission.FOREGROUND_SERVICE",
      "android.permission.FOREGROUND_SERVICE_LOCATION",
      "android.permission.ACCESS_BACKGROUND_LOCATION",
    ],
  },
  plugins: [
    "expo-asset",
    [
      "expo-splash-screen",
      {
        backgroundColor: "#ffffff",
        image: "./assets/splash-icon.png",
      },
    ],
    [
      "expo-font",
      {
        fonts: fontTypes.map(
          (fontName) => `./assets/fonts/${font.toLowerCase()}/${fontName}`
        ),
      },
    ],
    "react-native-edge-to-edge",
    [
      "expo-location",
      {
        locationAlwaysAndWhenInUsePermission:
          "Allow $(PRODUCT_NAME) to use your location.",
      },
    ],
    [
      "expo-document-picker",
      {
        iCloudContainerEnvironment: "Production",
      },
    ],
    [
      "expo-camera",
      {
        cameraPermission: "Allow $(PRODUCT_NAME) to access your camera",
        microphonePermission: "Allow $(PRODUCT_NAME) to access your microphone",
        recordAudioAndroid: true,
      },
    ],
  ],
});

export const font = "Montserrat";
const fontTypes = [
  `${font}-Black.ttf`,
  `${font}-BlackItalic.ttf`,
  `${font}-Bold.ttf`,
  `${font}-BoldItalic.ttf`,
  `${font}-ExtraBold.ttf`,
  `${font}-ExtraBoldItalic.ttf`,
  `${font}-ExtraLight.ttf`,
  `${font}-ExtraLightItalic.ttf`,
  `${font}-Italic.ttf`,
  `${font}-Light.ttf`,
  `${font}-LightItalic.ttf`,
  `${font}-Medium.ttf`,
  `${font}-MediumItalic.ttf`,
  `${font}-Regular.ttf`,
  `${font}-SemiBold.ttf`,
  `${font}-SemiBoldItalic.ttf`,
  `${font}-Thin.ttf`,
  `${font}-ThinItalic.ttf`,
];
