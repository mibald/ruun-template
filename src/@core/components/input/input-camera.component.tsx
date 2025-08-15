import { CameraCapturedPicture } from "expo-camera";
import React, { useEffect } from "react";
import { Image, Pressable, View } from "react-native";
import { Text } from "../text/text.component";
import { IconCamera } from "@tabler/icons-react-native";
import colors from "tailwindcss/colors";
import { useCameraStore } from "@core/store/camera.store";

export interface InputCameraProps {
  onPress?: (key?: string) => void;
  error?: string;
  label?: string;
  description?: string;
  value?: CameraCapturedPicture;
  onChange?: (picture: CameraCapturedPicture) => void;
  name?: string;
  onBlur?: () => void;
}
export const InputCamera = ({
  description,
  error,
  label,
  onPress,
  value,
  onChange,
  name,
  onBlur
}: InputCameraProps) => {
  const eventEmitter = useCameraStore((state) => state.eventEmitter);

  useEffect(() => {
    eventEmitter.addListener("onNewPicture", (picture) => {
      if ( picture && picture.key === name ) {
        onChange?.(picture);
      }
    });
  }, []);

  return (
    <View>
      {/* Label */}
      {label ? (
        <Text size="md" weight="semibold" className="text-zinc-800">
          {label}
        </Text>
      ) : null}

      {/* Button */}
      <Pressable
      onBlur={onBlur}
        onPress={() => {
          onPress?.(name);
          console.log("this is being pressed...")
        }}
        className="h-32 w-full rounded-lg overflow-hidden border border-zinc-400 bg-white"
      >
        {value && value.uri ? (
          <Image
            source={{
              uri: value.uri,
            }}
            style={{ width: "100%", height: "100%" }}
          />
        ) : null}

        {!value || !value.uri ? (
          <View className="flex-1 items-center justify-center">
            <IconCamera size={32} color={colors.zinc[400]} />
            <Text>Press to open the camera.</Text>
          </View>
        ) : null}
      </Pressable>
      {/* Description */}
      {description && !error ? (
        <Text size="xs" className="text-zinc-800">
          {description}
        </Text>
      ) : null}

      {/* Error Message */}
      {error ? (
        <Text size="xs" className="text-primary">
          {error}
        </Text>
      ) : null}
    </View>
  );
};
