import { Button, Input } from "@core/components";
import { useObject } from "@features/auth/hooks";
import { useNavigation } from "@react-navigation/native";
import { IconSearch } from "@tabler/icons-react-native";
import React from "react";
import { RideRequestState } from "../types/ride-request-state.type";
import { useSnapBottomSheetOnFocus } from "../hooks/use-snap-bottom-sheet-on-focus.hook";

const BOTTOM_SHEET_POSITION = "50%";
export default function RideRequestScreen() {
  const navigation = useNavigation();
  const { setValue: setLocation, state: locations } =
    useObject<RideRequestState>();

  useSnapBottomSheetOnFocus(BOTTOM_SHEET_POSITION);

  function onPressOrigin() {
    navigation.navigate("Ride", {
      screen: "SearchLocation",
      params: {
        onSelect: setLocation,
        type: "origin",
      },
    });
  }

  function onPressDestination() {
    navigation.navigate("Ride", {
      screen: "SearchLocation",
      params: {
        onSelect: setLocation,
        type: "destination",
      },
    });
  }

  function onPressContinue() {
    navigation.navigate("Ride", {
      screen: "SelectVehicle",
      params: {
        destination: locations.destination!,
        origin: locations.origin!,
      }
    });
  }

  return (
    <React.Fragment>
      <Input
        label="Your Location"
        onPress={onPressOrigin}
        icons={{
          right: IconSearch,
        }}
        value={locations.origin?.name}
        placeholder={"Search Origin"}
        multiline
        textAlignVertical="top"
      />

      <Input
        label="Destination"
        onPress={onPressDestination}
        icons={{
          right: IconSearch,
        }}
        value={locations.destination?.name}
        placeholder={"Search Destination"}
        multiline
        textAlignVertical="top"
      />

      <Button
        title="Continue"
        disabled={!locations.destination || !locations.origin}
        onPress={onPressContinue}
      />
    </React.Fragment>
  );
}
