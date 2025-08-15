import { forwardRef, ReactNode, useImperativeHandle, useRef, useState } from "react";
import { Modal as NativeModal } from "react-native";

export interface ModalAction {
  visible: () => void;
  hidde: () => void;
  async: () => Promise<void>;
  status: boolean;
}
interface Props {
    children?: React.ReactNode;
    onVisibleChange?: (value: boolean) => void;
    visible?: boolean;
}

export const Modal = forwardRef<ModalAction, Props>((props, ref) => {
  const [visible, setVisible] = useState(props.visible ? true : false);

  useImperativeHandle(ref, () => ({
    hidde: () => {
        setVisible(false)
        props.onVisibleChange?.(false);
    },
    status: visible,
    visible: () => {
        setVisible(true)
        props.onVisibleChange?.(true);
    },
    async: () => new Promise((resolve) => resolve()),
  }))

  return <NativeModal visible={visible} statusBarTranslucent transparent animationType="fade">{props.children}</NativeModal>;
});
