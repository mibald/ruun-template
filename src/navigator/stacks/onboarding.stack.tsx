import { Screen } from "@core/components";
import HomeScreen from "@features/onboarding/screens/home.screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export const OnboardingStack = createNativeStackNavigator({
  screens: {
    Home: HomeScreen,
  },
  screenOptions: {
    animation: "slide_from_right",
    headerShown: false,
  },
  screenLayout: (props) => <Screen {...props} />,
});
