import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStack } from "./auth.stack";
import { createStaticNavigation, StaticParamList } from "@react-navigation/native";
import { RootLayout } from "../layouts/root.layout";
import { OnboardingStack } from "./onboarding.stack";
import { RideStack } from "./ride.stack";
import { AccountStack } from "./account.stack";

const RootStack = createNativeStackNavigator({
  screens: {
    Auth: AuthStack,
    Onboarding: OnboardingStack,
    Ride: RideStack,
    Account: AccountStack,
  },
  layout: (props) => <RootLayout {...props} />,
  screenOptions: {
    animation: "slide_from_right",
    headerShown: false,
  },
});

export const Navigation = createStaticNavigation(RootStack);
export type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface RootParamList extends RootStackParamList {}
  }
}