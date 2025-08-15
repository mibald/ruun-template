import { Button, Checkbox, Input, InputControl, Separator, Text } from "@core/components";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import { SignUpForm } from "../types";

const formSchema = yup.object({
  name: yup.string().required().min(4),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  terms: yup
    .boolean()
    .required()
    .oneOf([true], "You must be older than 18 years"),
});

const defaultValues: SignUpForm = {
  name: "Miguel Hernandez",
  email: "miguelaless.hc@gmail.com",
  phone: "+58 412 0380652",
  terms: true,
}

export default function SignUpScreen() {
  const navigation = useNavigation();

  const {
    control,
    formState: { isDirty, isValid },
    handleSubmit,
  } = useForm<SignUpForm>({
    defaultValues,
    resolver: yupResolver(formSchema),
  });

  function onSubmit(params: SignUpForm) {
    return navigation.navigate("Auth", {
      screen: "Otp",
      params: {
        onSuccess: () => navigation.navigate("Auth", {
          screen: "SignUpPassword",
        }),
      }
    })
  }

  return (
    <React.Fragment>
      <Text size="3xl" weight="semibold">
        Sign up with your email or phone number
      </Text>
      <InputControl controller={control} name="name" placeholder="Miguel Hernandez" autoFocus/>
      <InputControl
        controller={control}
        name="email"
        placeholder="example@mail.com"
        type="email"
      />
      <InputControl controller={control} name="phone" type="phone" />
      <Checkbox
        label="I accept the terms and conditions"
        controller={control}
        name="terms"
      />
      <Button
        onPress={handleSubmit(onSubmit)}
        title="Sign Up"
        // disabled={!isDirty || !isValid}
      />
      <Separator />
      <Text className="text-center">
        Already have an account?{" "}
        <Text className="text-primary" weight="semibold">
          Sign in
        </Text>
      </Text>
    </React.Fragment>
  );
}
