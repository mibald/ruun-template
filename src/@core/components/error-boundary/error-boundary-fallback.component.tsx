import React from "react";
import { View } from "react-native";
import { Text } from "../text/text.component";
import { Separator } from "../separator/separator.component";
import { Button } from "../button/button.component";
import { mmkv } from "src/store/mmkv";
import { PERSIST_KEY } from "@core/hooks/use-persist-navigator.hook";

export type Props = { error: Error; resetError: () => void };

const FallbackComponent = (props: Props) => (
  <View className="flex-1 p-8 gap-4 justify-center">
    <Text size="3xl" weight="semibold">
      Oops!
    </Text>
    <Text size="xl">{"There's an error"}</Text>
    <Separator />
    <Text weight="semibold">{props.error.toString()}</Text>
    <Button
      title="Try Again!"
      onPress={() => {
        mmkv.delete(PERSIST_KEY);
        props.resetError();
      }}
    />
  </View>
);

export default FallbackComponent;
