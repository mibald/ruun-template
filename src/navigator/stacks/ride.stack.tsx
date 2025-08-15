import RideRequestScreen from "@features/ride/screens/ride-request.screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RideStackLayout } from "../layouts/ride-stack.layout";
import RideSelectVehicleScreen from "@features/ride/screens/ride-select-vehicle.screen";
import SearchLocationScreen from "@features/ride/screens/ride-search-location.screen";
import { View } from "react-native";
import RideDriverFoundScreen from "@features/ride/screens/ride-driver-found.screen";
import RideScreen from "@features/ride/screens/ride.screen";
import RideFinishedScreen from "@features/ride/screens/ride-finished.screen";
import SearchingClientScreen from "@features/ride/screens/ride-searching-client.screen";
import RideClientFoundScreen from "@features/ride/screens/ride-client-found.screen";
import RideChatScreen from "@features/ride/screens/ride-chat.screen";
import RideProfileScreen from "@features/ride/screens/ride-profile.screen";

export const RideStack = createNativeStackNavigator({
  screens: {
    RideRequest: RideRequestScreen,
    SelectVehicle: RideSelectVehicleScreen,
    SearchLocation: SearchLocationScreen,
    DriverFound: RideDriverFoundScreen,
    RideProgress: RideScreen,
    RideFinished: RideFinishedScreen,
    SearchingClient: SearchingClientScreen,
    ClientFound: RideClientFoundScreen,
    Chat: RideChatScreen,
    Profile: RideProfileScreen,
  },
  layout: (props) => <RideStackLayout {...props} />,
  screenLayout: (props) => <View className="gap-4">{props.children}</View>,
  screenOptions: {
    animation: "fade",
    contentStyle: {
      backgroundColor: "white",
      padding: 8,
    },
    headerShown: false,
    headerTitleStyle: {
      fontFamily: "Montserrat-SemiBold"
    },
  },
});
