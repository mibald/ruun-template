import { StaticScreenProps } from "@react-navigation/native";
import { Vehicle } from "../type/vehicle.type";
import React, { useState } from "react";
import { Image, Switch, View } from "react-native";
import { Button, Text } from "@core/components";
import { COLORS } from "@core/const";
import { VehicleClassList } from "../components/vehicle-class-list.component";
import { VehicleDocumentBadge } from "../components/vehicle-document-badge.component";
import { MetricBadge } from "../components/vehicle-metric-badge.component";
import { VehicleStatusBadge } from "../components/vehicle-status-badge.component";

type Props = StaticScreenProps<{ vehicle: Vehicle }>;
export default function AccountVehicleScreen({ route }: Props) {
  const [isEnabled, setIsEnabled] = useState(false);
  const vehicle = route.params.vehicle;

  // Helper function to format dates
  const formatDate = (date: Date) => new Date(date).toLocaleDateString();

  return (
    <React.Fragment>
      <View className="rounded-lg overflow-hidden shadow-md bg-white">
        <Image source={{ uri: vehicle.picture }} className="w-full h-32" />
      </View>

      {/* Basic Info */}
      <View className="gap-4">
        <View>
          <Text size="3xl" weight="semibold">
            {vehicle.model}{" "}
            <Text className="text-zinc-500">({vehicle.year})</Text>
          </Text>
          <Text className="text-zinc-600 mb-3">
            {vehicle.color} • {vehicle.licensePlate}
          </Text>

          <VehicleStatusBadge status={vehicle.status} />
        </View>

        {/* Availability Toggle */}
        <View className="flex-row items-center justify-between bg-white p-4 rounded-lg shadow-sm">
          <Text>Available for rides</Text>
          <Switch
            trackColor={{ false: COLORS.secondary, true: COLORS.secondary }}
            thumbColor={isEnabled ? COLORS.primary : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={setIsEnabled}
            value={isEnabled}
          />
        </View>
        <View className="flex-row items-center gap-4 my-2">
          <VehicleClassList classes={vehicle.classes} />
        </View>
      </View>

      {/* Metrics */}
      <View className="flex-row justify-between">
        <MetricBadge
          title="Trips"
          value={`${vehicle.metrics?.tripsCompleted || 0}`}
        />
        <MetricBadge
          title="Rating"
          value={`${vehicle.metrics?.avgRating?.toFixed(1) || "N/A"}`}
        />
      </View>

      {/* Documents Section */}
      <View className="gap-4">
        <Text className="text-gray-900" weight="semibold">
          Documents
        </Text>

        <VehicleDocumentBadge
          title={"Registration"}
          value={`Expires: ${formatDate(
            vehicle.documents.registration.expiry
          )}`}
        />
        <VehicleDocumentBadge
          title={"Insurance"}
          value={`Expires: ${formatDate(vehicle.documents.insurance.expiry)}`}
        />
      </View>

      <Button title="Delete" />
    </React.Fragment>
  );
}
