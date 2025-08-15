import { Button, Input, InputControl, Text } from "@core/components";
import React from "react";
import { useForm } from "react-hook-form";
import { ForgetPasswordForm } from "../types";
import { forgetPasswordFormResolver } from "../utils";
import { useNavigation } from "@react-navigation/native";

const defaultValues: ForgetPasswordForm = {
  email: "miguelaless.hc@gmail.com",
};

export default function ForgetPasswordScreen() {
  const navigation = useNavigation();

  const { control, handleSubmit } = useForm<ForgetPasswordForm>({
    defaultValues,
    resolver: forgetPasswordFormResolver,
  });

  function onSubmit(value: ForgetPasswordForm) {
    return navigation.navigate("Auth", {
      screen: "Otp",
      params: {
        onSuccess: () => navigation.navigate("Auth", {
          screen: "SignUpPassword",
        }),
      }
    });
  }

  return (
    <React.Fragment>
      <Text size="3xl" weight="semibold" className="text-center">
        Verification email or phone number
      </Text>
      <InputControl
        controller={control}
        name="email"
        label="Email"
        placeholder="example@mail.com"
      />
      <Button title="Send OTP" onPress={handleSubmit(onSubmit)} />
    </React.Fragment>
  );
}
