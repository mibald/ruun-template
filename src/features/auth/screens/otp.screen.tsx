import { ParamListBase, ParamListRoute, StaticScreenProps, useNavigation } from "@react-navigation/native";
import { OtpForm } from "../types";
import React from "react";
import { Button, InputOtp, Text } from "@core/components";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const formSchema = yup.object({
  otp: yup.string().required().min(6).max(6),
});

type Props = StaticScreenProps<{ onSuccess: () => void }>;
export default function OtpScreen(props: Props) {
  const navigation = useNavigation();

  const { control, handleSubmit } = useForm<OtpForm>({
    defaultValues: {
      otp: "",
    },
    resolver: yupResolver(formSchema),
  });

  function onSubmit(values: OtpForm) {
    return props.route.params.onSuccess();
  }
  return (
    <React.Fragment>
      <Text size="3xl" weight="semibold" className="text-center">
        Phone verification
      </Text>
      <Text size="xl" className="text-center">
        Enter your OTP code
      </Text>
      <InputOtp
        controller={control}
        name="otp"
        onFilled={handleSubmit(onSubmit)}
      />
      <Text>
        Did not received the code?{" "}
        <Text className="text-primary" weight="semibold">
          Resend again
        </Text>
      </Text>
      <Button title="Verify" onPress={handleSubmit(onSubmit)} />
    </React.Fragment>
  );
}
