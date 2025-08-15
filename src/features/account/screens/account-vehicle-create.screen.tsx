import {
  Button,
  CameraModal,
  CameraModalActions,
  InputCameraControl,
  InputControl,
  SelectControl,
} from "@core/components";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import {
  CreateVehicleFormProps,
  createVehicleResolver,
  defaultValuesCreateVehicleFormProps,
} from "../utils/create-vehicle-resolver.util";
import { IconCertificate2 } from "@tabler/icons-react-native";
import { ScrollView, View } from "react-native";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { colorsMock, vehicleBrands, yearsMock } from "../mocks";

export default function AccountCreateVehicleScreen() {
  const cameraRef = useRef<CameraModalActions | null>(null);

  const { control, handleSubmit } = useForm<CreateVehicleFormProps>({
    defaultValues: defaultValuesCreateVehicleFormProps,
    resolver: createVehicleResolver,
  });

  function onSubmit(values: CreateVehicleFormProps) {
    console.log(Object.keys(values));
  }

  return (
    <React.Fragment>
      <BottomSheetModalProvider>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="gap-4 pb-8">
            {/* Front Picture */}
            <InputCameraControl
              controller={control}
              name="vehicleFrontPicture"
              description="This picture must be horizontal"
              label="Vehicle Frontal Picture"
              onPress={(key) => {
                cameraRef.current?.toggleVisible(key);
              }}
            />

            {/* License Plate */}
            <InputControl
              label="License Plate"
              controller={control}
              name="licensePlate"
              placeholder="ABC123"
            />

            {/* Model */}
            <InputControl
              controller={control}
              name="model"
              label="Model"
              placeholder="Tesla X"
            />

            {/* Brand */}
            <SelectControl
              controller={control}
              name="brand"
              options={vehicleBrands}
              label="Brand"
            />

            {/* Color */}
            <SelectControl
              controller={control}
              name="color"
              options={colorsMock}
              label="Color"
            />

            {/* Year */}
            <SelectControl
              controller={control}
              name="year"
              options={yearsMock}
              label="Year"
            />

            {/* Registration Certificate */}
            <InputControl
              type="file"
              label="Registration Certificate"
              controller={control}
              name="registrationCert"
              placeholder="Select a file"
              icons={{
                right: IconCertificate2,
              }}
            />

            {/* Insurance  */}
            <InputControl
              type="file"
              label="Insurance"
              controller={control}
              placeholder="Select a file"
              name="insurance"
              icons={{
                right: IconCertificate2,
              }}
            />
          </View>
        </ScrollView>

        <Button title="Sign In" onPress={handleSubmit(onSubmit)} />
      </BottomSheetModalProvider>

      {/* Modals */}
      <CameraModal ref={cameraRef} />
    </React.Fragment>
  );
}
