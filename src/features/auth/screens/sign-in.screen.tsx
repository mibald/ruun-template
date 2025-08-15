import { Button, Input, InputControl, Text } from "@core/components";
import React from "react";
import { useForm } from "react-hook-form";
import { SignInForm } from "../types";
import { signInFormResolver } from "../utils";
import { useNavigation } from "@react-navigation/native";

const defaultValues: SignInForm = {
  email: "miguelaless.hc@gmail.com",
  password: "2567246Mi#",
};

export default function SignInScreen() {
  const navigation = useNavigation();

  const {
    control,
    formState: { isDirty, isValid },
    handleSubmit,
  } = useForm<SignInForm>({
    defaultValues,
    resolver: signInFormResolver,
  });

  function onSubmit(values: SignInForm) {
    return navigation.navigate("Auth", {
      screen: "Otp",
      params: {
        onSuccess: () =>
          navigation.navigate("Onboarding", {
            screen: "Home",
          }),
      },
    });
  }

  function onForgetPassword() {
    navigation.navigate("Auth", {
      screen: "ForgetPassword",
    });
  }
  return (
    <React.Fragment>
      <Text size="3xl" weight="semibold" className="text-center">
        Sign in with your email or phone number
      </Text>
      <InputControl
        controller={control}
        name="email"
        label="Email"
        placeholder="mail@example.com"
      />
      <InputControl
        controller={control}
        name="password"
        label="Password"
        placeholder="******"
        type="password"
      />
      <Text
        onPress={onForgetPassword}
        className="text-right text-primary"
        weight="semibold"
      >
        Forget password?
      </Text>
      <Button
        title="Sign In"
        onPress={handleSubmit(onSubmit)}
        // disabled={!isDirty || !isValid}
      />
    </React.Fragment>
  );
}
