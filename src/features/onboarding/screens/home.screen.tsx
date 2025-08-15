import { Button, Separator, Text } from "@core/components";
import { IconLock } from "@tabler/icons-react-native";
import React from "react";
import { vehicleOptionsMock } from "../mock/vehicles-options.mock";
import { useNavigation } from "@react-navigation/native";
import { UserHeader } from "@features/ride/component/user-header.component";
import { mockClient, mockDriver } from "@features/common/mocks";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <React.Fragment>
      <UserHeader user={mockDriver} settingsButton />
      <Text size="3xl" weight="semibold">
        Welcome dear user!
      </Text>
      <Text>I would like to ask for:</Text>

      {vehicleOptionsMock.map((vehicle) => (
        <Button
          key={vehicle.name}
          title={vehicle.name.toUpperCase()}
          icons={{
            left: vehicle.icon,
            right: vehicle.disabled ? IconLock : undefined,
          }}
          variant="outlined"
          disabled={vehicle.disabled}
          onPress={() => {
            navigation.navigate("Ride", {
              screen: "RideRequest",
            });
          }}
        />
      ))}

      <Separator />

      <Text>I would like to drive my:</Text>

      {vehicleOptionsMock.map((vehicle) => (
        <Button
          key={vehicle.name}
          title={vehicle.name.toUpperCase()}
          icons={{
            left: vehicle.icon,
            right: vehicle.disabled ? IconLock : undefined,
          }}
          variant="outlined"
          disabled={vehicle.disabled}
          onPress={() => {
            navigation.navigate("Ride", {
              screen: "SearchingClient",
            });
          }}
        />
      ))}
    </React.Fragment>
  );
}
