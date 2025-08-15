import { tv } from "tailwind-variants";
import { Modal, ModalAction } from "./modal.component";
import { Image, View } from "react-native";
import { forwardRef } from "react";
import { Text } from "../text/text.component";
import { Button } from "../button/button.component";

const alertImage = require("../../../../assets/icons/alerta.png");

interface Props {
    onPress?: () => void;
}

export const ModalAlert = forwardRef<ModalAction, Props>((props, ref) => {
  return (
    <Modal ref={ref} onVisibleChange={console.log}>
      <View className={modal()}>
        <View className={alert()}>
          <Image className="w-32 h-32 object-cover" source={alertImage} />
          <Text size="2xl" weight="semibold">
            Error al solicitar informacion.
          </Text>
          <Text className="text-center">
            Ha ocurrido un error por tu informacion geografica, intenta con un vpn.
          </Text>
          <Button title="Aceptar" onPress={props.onPress}/>
        </View>
      </View>
    </Modal>
  );
});

const modal = tv({
  base: "bg-zinc-900/10 flex-1 items-center justify-center",
});

const alert = tv({
  base: "w-[80%] max-h-1/2 bg-zinc-100 border rounded-lg border-zinc-200 p-6 items-center justify-center gap-4",
});
