import { Button, Screen, Text } from "@core/components";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, View } from "react-native";

const placeholder = require("../../../../assets/images/placeholder.png");

export default function StartScreen() {
  const navigation = useNavigation();
  return (
    <React.Fragment>
      <View className="w-full my-auto items-center justify-center gap-4">
        <Image source={placeholder} style={{ width: "100%", height: 200 }} />

        <Text size="3xl" weight="semibold">
          Welcome
        </Text>

        <Text>Have a better sharing experience</Text>
      </View>
      <View className="w-full gap-4">
        <Button
          onPress={() =>
            navigation.navigate("Auth", {
              screen: "SignUp",
            })
          }
          title="Create an account"
          color="primary"
        />
        <Button
          variant="outlined"
          title="Log In"
          color="primary"
          onPress={() =>
            navigation.navigate("Auth", {
              screen: "SignIn",
            })
          }
        />
      </View>
    </React.Fragment>
  );
}
