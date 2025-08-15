import React, { useCallback } from "react";
import { FlatList } from "react-native";
import { vehicles } from "../mocks/vehicle.mock";
import { Vehicle } from "../type/vehicle.type";
import { ManageVehicleBadge } from "../components/manage-vehicle-badge.component";
import { Button } from "@core/components";
import { useNavigation } from "@react-navigation/native";

export default function AccountVehicleListScreen() {
  const navigation = useNavigation();

  const renderItem = useCallback(({ item }: { item: Vehicle }) => {
    return (
      <ManageVehicleBadge
        item={item}
        onPress={(vehicle) =>
          navigation.navigate("Account", {
            screen: "Vehicle",
            params: { vehicle },
          })
        }
      />
    );
  }, []);

  return (
    <React.Fragment>
      <FlatList
        data={vehicles}
        renderItem={renderItem}
        keyExtractor={(vehicle) => vehicle.id}
      />
      <Button
        title="Create"
        onPress={() =>
          navigation.navigate("Account", {
            screen: "CreateVehicle",
          })
        }
      />
    </React.Fragment>
  );
}
