import { StaticScreenProps, useNavigation } from "@react-navigation/native";
import { Ride } from "../types/ride.type";
import React, { useState } from "react";
import { Button, Input, Text } from "@core/components";
import { Image, View } from "react-native";
import { RateStar } from "../component/rate-star.component";
import { useSnapBottomSheetOnFocus } from "../hooks/use-snap-bottom-sheet-on-focus.hook";

type Props = StaticScreenProps<{ ride: Ride }>;
const BOTTOM_SHEET_POSITION = "90%";

export default function RideFinishedScreen(props: Props) {
  const navigation = useNavigation();
  const [stars, setStars] = useState(0);

  const ride = props.route.params.ride;

  useSnapBottomSheetOnFocus(BOTTOM_SHEET_POSITION);

  return (
    <React.Fragment>
      <Text size="2xl" weight="semibold">
        You have finished the ride!
      </Text>
      <Text>Would you care to rate your driver? (Optional)</Text>

      <View className="items-center justify-center gap-4">
        <Image
          source={{
            uri: ride.driver.picture,
          }}
          className="w-32 h-32 rounded-full border border-primary"
        />
        <Text weight="semibold" size="xl">
          {ride.driver.full_name}
        </Text>

        <View className="flex-row gap-4">
          <RateStar onSelectStars={setStars} stars={stars} />
        </View>
      </View>

      <Text>
        Also would you care to leave something about this experience? (Optional)
      </Text>
      <Input
        label="Comment"
        placeholder="This experience or driver has been ..."
      />

      <Button
        title="Accept"
        onPress={() => {
          navigation.reset({
            routes: [{
              name: "Onboarding"
            }]
          })
        }}
      />
    </React.Fragment>
  );
}
