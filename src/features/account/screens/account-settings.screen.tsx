import React, { useState } from 'react';
import { View, Switch, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons, Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Text } from '@core/components';

export default function AccountSettingsScreen() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [biometricEnabled, setBiometricEnabled] = useState(false);

  const languages = ['English', 'Spanish', 'French', 'German', 'Japanese'];

  const toggleDarkMode = () => setIsDarkMode(previousState => !previousState);
  const toggleNotifications = () => setNotificationsEnabled(previousState => !previousState);
  const toggleBiometric = () => setBiometricEnabled(previousState => !previousState);

  return (
   <ScrollView>
    {/* App Preferences Section */}
    <View className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <Text size='lg' weight='semibold' className="px-4 pt-4 text-gray-700 dark:text-gray-300">App Preferences</Text>
        
        {/* Theme Mode */}
        <View className="flex-row justify-between items-center p-4 border-b border-gray-100 dark:border-gray-700">
          <View className="flex-row items-center">
            <MaterialCommunityIcons 
              name={isDarkMode ? "weather-night" : "weather-sunny"} 
              size={20} 
              className="text-gray-600 dark:text-gray-400" 
            />
            <Text className="ml-3 text-gray-700 dark:text-gray-300">Dark Mode</Text>
          </View>
          <Switch
            value={isDarkMode}
            onValueChange={toggleDarkMode}
            thumbColor={isDarkMode ? "#6366f1" : "#f3f4f6"}
            trackColor={{ false: "#d1d5db", true: "#e0e7ff" }}
          />
        </View>

        {/* Language Selection */}
        <View className="p-4 border-b border-gray-100 dark:border-gray-700">
          <View className="flex-row items-center mb-2">
            <Ionicons name="language" size={20} className="text-gray-600 dark:text-gray-400" />
            <Text className="ml-3 text-gray-700 dark:text-gray-300">Language</Text>
          </View>
          <View className="mt-2">
            {languages.map((language) => (
              <TouchableOpacity
                key={language}
                className={`py-2 px-4 rounded-md ${selectedLanguage === language ? 'bg-indigo-100 dark:bg-gray-700' : ''}`}
                onPress={() => setSelectedLanguage(language)}
              >
                <Text className={`${selectedLanguage === language ? 'text-indigo-600 dark:text-indigo-400 font-medium' : 'text-gray-600 dark:text-gray-400'}`}>
                  {language}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>

      {/* Notification Settings */}
      <View className="mt-6  bg-white dark:bg-gray-800 rounded-lg shadow">
        <Text weight='semibold' className="px-4 pt-4 text-gray-700 dark:text-gray-300">Notifications</Text>
        
        <View className="flex-row justify-between items-center p-4 border-b border-gray-100 dark:border-gray-700">
          <View className="flex-row items-center">
            <Ionicons name="notifications-outline" size={20} className="text-gray-600 dark:text-gray-400" />
            <Text className="ml-3 text-gray-700 dark:text-gray-300">Enable Notifications</Text>
          </View>
          <Switch
            value={notificationsEnabled}
            onValueChange={toggleNotifications}
            thumbColor={notificationsEnabled ? "#6366f1" : "#f3f4f6"}
            trackColor={{ false: "#d1d5db", true: "#e0e7ff" }}
          />
        </View>

        {notificationsEnabled && (
          <>
            <View className="flex-row justify-between items-center p-4 border-b border-gray-100 dark:border-gray-700">
              <View className="flex-row items-center">
                <Feather name="bell" size={20} className="text-gray-600 dark:text-gray-400" />
                <Text className="ml-3 text-gray-700 dark:text-gray-300">Sound</Text>
              </View>
              <MaterialIcons name="keyboard-arrow-right" size={20} className="text-gray-400" />
            </View>

            <View className="flex-row justify-between items-center p-4">
              <View className="flex-row items-center">
                <Feather name="clock" size={20} className="text-gray-600 dark:text-gray-400" />
                <Text className="ml-3 text-gray-700 dark:text-gray-300">Notification Schedule</Text>
              </View>
              <MaterialIcons name="keyboard-arrow-right" size={20} className="text-gray-400" />
            </View>
          </>
        )}
      </View>

      {/* Security Settings */}
      <View className="mt-6  bg-white dark:bg-gray-800 rounded-lg shadow">
        <Text weight='semibold' className="px-4 pt-4 text-gray-700 dark:text-gray-300">Security</Text>
        
        <View className="flex-row justify-between items-center p-4 border-b border-gray-100 dark:border-gray-700">
          <View className="flex-row items-center">
            <MaterialCommunityIcons name="fingerprint" size={20} className="text-gray-600 dark:text-gray-400" />
            <Text className="ml-3 text-gray-700 dark:text-gray-300">Biometric Login</Text>
          </View>
          <Switch
            value={biometricEnabled}
            onValueChange={toggleBiometric}
            thumbColor={biometricEnabled ? "#6366f1" : "#f3f4f6"}
            trackColor={{ false: "#d1d5db", true: "#e0e7ff" }}
          />
        </View>

        <TouchableOpacity className="flex-row justify-between items-center p-4">
          <View className="flex-row items-center">
            <MaterialIcons name="lock-outline" size={20} className="text-gray-600 dark:text-gray-400" />
            <Text className="ml-3 text-gray-700 dark:text-gray-300">Change Password</Text>
          </View>
          <MaterialIcons name="keyboard-arrow-right" size={20} className="text-gray-400" />
        </TouchableOpacity>
      </View>

      {/* About Section */}
      <View className="mt-6  mb-8 bg-white dark:bg-gray-800 rounded-lg shadow">
        <Text className="px-4 pt-4 text-lg  text-gray-700 dark:text-gray-300">About</Text>
        
        <TouchableOpacity className="flex-row justify-between items-center p-4 border-b border-gray-100 dark:border-gray-700">
          <View className="flex-row items-center">
            <MaterialIcons name="info-outline" size={20} className="text-gray-600 dark:text-gray-400" />
            <Text className="ml-3 text-gray-700 dark:text-gray-300">Terms of Service</Text>
          </View>
          <MaterialIcons name="keyboard-arrow-right" size={20} className="text-gray-400" />
        </TouchableOpacity>

        <TouchableOpacity className="flex-row justify-between items-center p-4 border-b border-gray-100 dark:border-gray-700">
          <View className="flex-row items-center">
            <MaterialIcons name="policy" size={20} className="text-gray-600 dark:text-gray-400" />
            <Text className="ml-3 text-gray-700 dark:text-gray-300">Privacy Policy</Text>
          </View>
          <MaterialIcons name="keyboard-arrow-right" size={20} className="text-gray-400" />
        </TouchableOpacity>

        <View className="flex-row justify-between items-center p-4">
          <View className="flex-row items-center">
            <MaterialIcons name="android" size={20} className="text-gray-600 dark:text-gray-400" />
            <Text className="ml-3 text-gray-700 dark:text-gray-300">App Version</Text>
          </View>
          <Text className="text-gray-500 dark:text-gray-400">1.0.0</Text>
        </View>
      </View>
   </ScrollView>
  );
};