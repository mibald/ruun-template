import { Screen } from "@core/components";
import AccountCreateVehicleScreen from "@features/account/screens/account-vehicle-create.screen";
import AccountHomeScreen from "@features/account/screens/account-home.screen";
import AccountProfileScreen from "@features/account/screens/account-profile.screen";
import AccountVehicleListScreen from "@features/account/screens/account-vehicle-list.screen";
import AccountVehicleScreen from "@features/account/screens/account-vehicle.screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountRideHistoryListScreen from "@features/account/screens/account-ride-history-list.screen";
import AccountRideHistoryScreen from "@features/account/screens/account-ride-history.screen";
import AccountWalletHomeScreen from "@features/account/screens/account-wallet-home.screen";
import AccountSettingsScreen from "@features/account/screens/account-settings.screen";

export const AccountStack = createNativeStackNavigator({
    screens: {
        AccountHome: {
            screen: AccountHomeScreen,
            options: {
                title: "Account"
            }
        },
        Profile: AccountProfileScreen,
        VehicleList: AccountVehicleListScreen,
        Vehicle: AccountVehicleScreen,
        CreateVehicle: AccountCreateVehicleScreen,
        RideHistoryList: AccountRideHistoryListScreen,
        RideHistory: AccountRideHistoryScreen,
        WalletHome: AccountWalletHomeScreen,
        Settings: AccountSettingsScreen,
    },
    screenOptions: {
        animation: "slide_from_right",
        headerShown: true,
        headerTitleStyle: {
            fontFamily: "Montserrat-SemiBold"
        },
    },
    screenLayout: (props) => <Screen {...props} />,
});