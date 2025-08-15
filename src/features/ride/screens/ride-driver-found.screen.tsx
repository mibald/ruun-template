import { useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import { Button, Text } from "@core/components";
import { mockRide } from "../mocks/ride.mock";
import { User } from "@features/common/types";
import { useSnapBottomSheetOnFocus } from "../hooks/use-snap-bottom-sheet-on-focus.hook";
import { UserHeader } from "../component/user-header.component";
import { rideRequestMock } from "../mocks/ride-request.mock";
import { OriginDestinationCard } from "../component/origin-destination-card.component";
import { View } from "react-native";
import { mockDriver } from "@features/common/mocks";
import { PricingInfoCard } from "../component/pricing-info-card.component";

const BOTTOM_SHEET_POSITION = "75%";

export default function RideDriverFoundScreen() {
  const navigation = useNavigation();

  useSnapBottomSheetOnFocus(BOTTOM_SHEET_POSITION);

  const onAccept = useCallback(() => {
    navigation.navigate("Ride", {
      screen: "RideProgress",
      params: {
        ride: mockRide,
      },
    });
  }, []);

  const onCancel = useCallback((user: User) => {}, []);

  return (
    <React.Fragment>
      {/* User Header */}
      <UserHeader user={mockDriver} profileButton vehicleBadge />

      {/* Locations Info */}
      <OriginDestinationCard
        destination={rideRequestMock.destination}
        origin={rideRequestMock.origin}
      />

      {/* Pricing Info */}
      <PricingInfoCard pricingInfo={rideRequestMock.pricing} />

      {/* Actions */}
      <View className="flex-row items-center justify-between">
        <Button
          title="Cancel"
          variant="outlined"
          width="w-[45%]"
          onPress={() => navigation.goBack()}
        />
        <Button
          title="Accept"
          variant="filled"
          width="w-[45%]"
          onPress={onAccept}
        />
      </View>
    </React.Fragment>
  );
}
