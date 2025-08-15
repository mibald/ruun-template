import React, { useCallback } from "react";
import { FlatList, View } from "react-native";
import { Button, Text } from "@core/components";
import { StaticScreenProps, useNavigation } from "@react-navigation/native";
import { useSnapBottomSheetOnFocus } from "../hooks/use-snap-bottom-sheet-on-focus.hook";
import { SelectVehicleButton } from "../component/select-vehicle.component";
import { Plan } from "../types/plan";
import { plansMock } from "../mocks/plans.mock";
import { Location } from "../types/location.type";

const BOTTOM_SHEET_POSITION = "50%";
type Props = StaticScreenProps<{ origin: Location, destination: Location }>;

export default function RideSelectVehicleScreen({ route: { params } }: Props) {
  const navigation = useNavigation();

  useSnapBottomSheetOnFocus(BOTTOM_SHEET_POSITION);

  function onPress(plan: Plan) {
    console.log(params, plan);
    navigation.navigate("Ride", {
      screen: "DriverFound",
    });
  }

  const renderItem = useCallback(({ item }: { item: Plan }) => {
    return (
      <SelectVehicleButton
        item={item}
        onPress={onPress}
      />
    );
  }, []);

  return (
    <React.Fragment>
      <Text weight="semibold">Select a vehicle:</Text>
      <FlatList
        ItemSeparatorComponent={() => <View className="my-2" />}
        data={plansMock}
        renderItem={renderItem}
      />
    </React.Fragment>
  );
}
