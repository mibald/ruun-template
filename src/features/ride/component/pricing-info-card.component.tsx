import { Text } from "@core/components";
import { View } from "react-native";
import { tv } from "tailwind-variants";
import React from "react";
import { PricingInfo } from "../types/pricing-info.type";
import { VehicleClass } from "@features/account/type/vehicle-class.type";

interface PricingInfoCardProps {
  pricingInfo: PricingInfo
}

export const PricingInfoCard = ({ pricingInfo }: PricingInfoCardProps) => {
  return (
    <React.Fragment>
      <Text weight="semibold">Pricing:</Text>
      <View className={card()}>
      <View className={featureContainer()}>
        <Text weight="semibold">Distance:</Text>
        <Text weight="semibold">{pricingInfo.distance} {pricingInfo.distanceUnit.toUpperCase()}</Text>
      </View>
      <View className={featureContainer()}>
        <Text weight="semibold">Vehicle Type:</Text>
        <Text weight="semibold">{VehicleClass.COMFORT}</Text>
      </View>
      <View className={featureContainer()}>
        <Text weight="semibold">Cost:</Text>
        <Text weight="semibold">{pricingInfo.total} {pricingInfo.currency.toUpperCase()}</Text>
      </View>
    </View>
    </React.Fragment>
  );
};

const card = tv({
  base: "p-2 grid grid-cols-2 gap-4 bg-zinc-100 rounded-lg border border-zinc-300",
});

export const featureContainer = tv({
  base: "flex-row items-center justify-between",
});
