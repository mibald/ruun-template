import { Button, Input, InputControl, Text } from "@core/components";
import React from "react";
import { SignUpPasswordForm } from "../types";
import { useForm } from "react-hook-form";
import {
  passwordFormResolver,
  passwordRequirementText,
} from "../utils/password-schema.util";
import { useNavigation } from "@react-navigation/native";

const defaultValues: SignUpPasswordForm = {
  confirmPassword: "2567246Mi#",
  password: "2567246Mi#",
};

export default function SignUpPasswordScreen() {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm({
    defaultValues,
    resolver: passwordFormResolver,
  });

  function onSubmit(values: SignUpPasswordForm) {
    return navigation.navigate("Onboarding", {
      screen: "Home",
    });
  }

  return (
    <React.Fragment>
      <Text size="3xl" weight="semibold" className="text-center">
        Set Password
      </Text>
      <Text size="xl" className="text-center">
        Create your personal password
      </Text>

      <InputControl
        controller={control}
        name="password"
        type="password"
        placeholder="********"
        label="Password"
      />
      <InputControl
        controller={control}
        name="confirmPassword"
        type="password"
        placeholder="********"
        label="Confirm password"
      />
      <Text>{passwordRequirementText}</Text>
      <Button
        title="Register"
        onPress={handleSubmit(onSubmit)}
        //   disabled={!isDirty || !isValid}
      />
    </React.Fragment>
  );
}
