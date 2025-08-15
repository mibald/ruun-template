import { NativeStackNavigatorProps } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export const RootLayout = (
  props: Parameters<NonNullable<NativeStackNavigatorProps["layout"]>>[0]
) => {
  return <GestureHandlerRootView>{props.children}</GestureHandlerRootView>;
};
