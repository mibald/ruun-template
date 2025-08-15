export const CONST = {
    APP_NAME: "MyApp",
    APP_VERSION: "1.0.0",
    API_URL: process.env.EXPO_PUBLIC_API_URL as string || "https://api.example.com",
} as const;