import { NativeStackNavigatorProps } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";
import { tv } from "tailwind-variants";

export const Screen = ({ children, className }: Parameters<NonNullable<NativeStackNavigatorProps["screenLayout"]>>[0] & { className?: string }) => {
  return (
    <View className={screenStyle({ className })}>
      {children}
    </View>
  );
};

const screenStyle = tv({
  base: "flex-1 p-8 pb-16 gap-4",
});
