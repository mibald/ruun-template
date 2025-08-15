import { StaticScreenProps, useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import { Ride } from "../types/ride.type";
import { UserHeader } from "../component/user-header.component";
import { FlatList, View } from "react-native";
import { RideRegistry } from "../types/ride-registry.type";
import { RideRegistryCard } from "../component/ride-registry-card.component";
import { Button, Separator, Text } from "@core/components";
import { IconMapCancel } from "@tabler/icons-react-native";
import { useSnapBottomSheetOnFocus } from "../hooks/use-snap-bottom-sheet-on-focus.hook";
import { OriginDestinationCard } from "../component/origin-destination-card.component";
import { PricingInfoCard } from "../component/pricing-info-card.component";

type Props = StaticScreenProps<{ ride: Ride }>;
const BOTTOM_SHEET_POSITION = "90%";

export default function RideScreen(props: Props) {
  const navigation = useNavigation();
  const ride = props.route.params.ride;

  const renderItem = useCallback(
    ({ item, index }: { item: RideRegistry; index: number }) => {
      return <RideRegistryCard registry={item} isLastStatus={index === 0} />;
    },
    []
  );

  useSnapBottomSheetOnFocus(BOTTOM_SHEET_POSITION);

  return (
    <React.Fragment>
      <UserHeader user={ride.driver} messageButton profileButton vehicleBadge />

      <Text weight="semibold">Status:</Text>
      <FlatList
        ItemSeparatorComponent={() => <View className="mb-2" />}
        data={ride.registries.slice(0, 1)}
        renderItem={renderItem}
      />

      <OriginDestinationCard
        destination={ride.destination}
        origin={ride.origin}
      />

      <PricingInfoCard pricingInfo={ride.pricing} />
      <Separator />
      <Button
        icons={{
          right: IconMapCancel,
        }}
        color="primary"
        variant="outlined"
        title="Cancel"
        className="mt-auto"
        onPress={() =>
          navigation.navigate("Ride", {
            screen: "RideFinished",
            params: {
              ride,
            },
          })
        }
      />
    </React.Fragment>
  );
}
