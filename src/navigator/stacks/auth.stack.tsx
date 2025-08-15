import { Screen } from "@core/components";
import ForgetPasswordScreen from "@features/auth/screens/forget-password.screen";
import OtpScreen from "@features/auth/screens/otp.screen";
import SignInScreen from "@features/auth/screens/sign-in.screen";
import SignUpPasswordScreen from "@features/auth/screens/sign-up-password.screen";
import SignUpScreen from "@features/auth/screens/sign-up.screen";
import StartScreen from "@features/auth/screens/start.screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export const AuthStack = createNativeStackNavigator({
  screens: {
    Start: StartScreen,
    SignUp: SignUpScreen,
    Otp: OtpScreen,
    SignUpPassword: SignUpPasswordScreen,
    SignIn: SignInScreen,
    ForgetPassword: ForgetPasswordScreen,
  },
  screenOptions: {
    animation: "slide_from_right",
    headerShown: false,
  },
  screenLayout: (props) => <Screen {...props} className="pt-12"/>,
});
