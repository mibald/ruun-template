import { mockClient } from "@features/common/mocks";
import {
  IconCar,
  IconHelp,
  IconLogout,
  IconSettings,
  IconTicket,
  IconUser,
  IconWallet,
} from "@tabler/icons-react-native";
import React, { useCallback } from "react";
import { FlatList } from "react-native";
import {
  AccountHomeButton,
  AccountHomeButtonProps,
} from "../components/account-home-button.component";
import { UserHeader } from "@features/ride/component/user-header.component";
import { Button } from "@core/components";
import { useNavigation } from "@react-navigation/native";

export default function AccountHomeScreen() {
  const navigation = useNavigation();
  const user = mockClient;

  const renderButton = useCallback(
    ({ item }: { item: AccountHomeButtonProps }) => {
      return (
        <AccountHomeButton
          {...item}
          onPress={(screenProps) => navigation.navigate("Account", screenProps)}
        />
      );
    },
    []
  );

  return (
    <React.Fragment>
      <UserHeader
        user={user}
        fullNameTextProps={{
          size: "xl",
        }}
      />
      <FlatList data={buttonList} renderItem={renderButton} />
      <Button
        title="Logout"
        icons={{
          right: IconLogout,
        }}
      />
    </React.Fragment>
  );
}

const buttonList: AccountHomeButtonProps[] = [
  {
    title: "Profile",
    icon: IconUser,
    screenProps: {
      screen: "Profile",
    },
  },
  {
    title: "Vehicles",
    icon: IconCar,
    screenProps: {
      screen: "VehicleList",
    },
  },
  {
    title: "Ride History",
    icon: IconTicket,
    screenProps: {
      screen: "RideHistoryList",
    },
  },
  {
    title: "Wallet",
    icon: IconWallet,
    screenProps: {
      screen: "WalletHome",
    },
  },
  // {
  //   title: "Help",
  //   icon: IconHelp,
  // },
  {
    title: "Settings",
    icon: IconSettings,
    screenProps: {
      screen: "Settings",
    },
  },
];
