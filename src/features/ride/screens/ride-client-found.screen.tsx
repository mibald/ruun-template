import React, { useCallback } from "react";
import { useSnapBottomSheetOnFocus } from "../hooks/use-snap-bottom-sheet-on-focus.hook";
import { rideRequestMock } from "../mocks/ride-request.mock";
import { UserHeader } from "../component/user-header.component";
import { OriginDestinationCard } from "../component/origin-destination-card.component";
import { Button, Text } from "@core/components";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { mockRide } from "../mocks/ride.mock";
import { PricingInfoCard } from "../component/pricing-info-card.component";

const BOTTOM_SHEET_POSITION = "75%";

export default function RideClientFoundScreen() {
  const navigation = useNavigation();
  useSnapBottomSheetOnFocus(BOTTOM_SHEET_POSITION);

  const onAccept = useCallback(() => {
    navigation.navigate("Ride", {
        screen: "RideProgress",
        params: { ride: mockRide },
    })
  }, []);
  return (
    <React.Fragment>
      {/* User Header */}
      <UserHeader user={rideRequestMock.client} profileButton />

      {/* Locations Info */}
      <OriginDestinationCard
        destination={rideRequestMock.destination}
        origin={rideRequestMock.origin}
      />

      {/* Pricing Info */}
      <Text>Pricing Info:</Text>
      <PricingInfoCard pricingInfo={rideRequestMock.pricing} />

      {/* Actions */}
      <View className="flex-row items-center justify-between">
        <Button title="Cancel" variant="outlined" width="w-[45%]" onPress={() => navigation.goBack()}/>
        <Button title="Accept" variant="filled" width="w-[45%]" onPress={onAccept} />
      </View>
    </React.Fragment>
  );
}
