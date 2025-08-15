import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import {
  CameraView,
  useCameraPermissions,
  PermissionStatus,
  CameraCapturedPicture,
} from "expo-camera";
import {
  ActivityIndicator,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS } from "@core/const";
import { Text } from "../text/text.component";
import { Button } from "../button/button.component";
import { Icon, IconCamera, IconInfoTriangle } from "@tabler/icons-react-native";
import { useCameraStore } from "@core/store/camera.store";

export interface CameraModalActions {
  toggleVisible: (key?: string) => void;
}

export type Picture = CameraCapturedPicture & { key?: string };
export type CameraEvents = {
  onPictureTaken: (picture: Picture) => void;
};

interface Props {
  onPicture?: (
    picture: CameraCapturedPicture | undefined,
    key?: string
  ) => void;
}

export const CameraModal = forwardRef<CameraModalActions, Props>(
  (props, ref) => {
    const eventEmitter = useCameraStore((state) => state.eventEmitter);
    const keyRef = useRef<string>();
    const [visible, setVisible] = useState(false);
    const cameraRef = useRef<CameraView | null>(null);
    const [permission, requestPermission] = useCameraPermissions();

    useImperativeHandle(ref, () => ({
      toggleVisible: (key) => {
        setVisible((current) => {
          console.log(`camera is gonna change to: ${!current}`);
          return !current;
        });
        keyRef.current = key;
      },
    }));

    const onTakePicture = useCallback(async () => {
      const pictureResult = await cameraRef.current?.takePictureAsync();

      if (!pictureResult) return null;

      eventEmitter.emit("onNewPicture", {
        ...pictureResult,
        key: keyRef.current,
      });
      props.onPicture?.(pictureResult, keyRef.current);

      return setVisible(false);
    }, []);

    const Camera = useCallback(() => {
      if (!permission) {
        return <ActivityIndicator color={COLORS.primary} size={32} />;
      }

      if (permission.status === PermissionStatus.UNDETERMINED) {
        return (
          <CameraAlert
            {...alertsContent.askPermission}
            onPress={() => requestPermission()}
            icon={IconCamera}
          />
        );
      }

      if (permission.status === PermissionStatus.DENIED) {
        return (
          <CameraAlert {...alertsContent.denied} icon={IconInfoTriangle} />
        );
      }

      return (
        <CameraView ref={cameraRef} style={styles.camera} facing={"back"}>
          <View className="absolute bottom-0 inset-x-0 p-8 flex-row justify-center items-center gap-4">
            <TouchableOpacity
              className="h-20 w-20 rounded-full bg-primary"
              onPress={onTakePicture}
            />
          </View>
        </CameraView>
      );
    }, [permission, requestPermission]);

    if (!visible) return null;

    return (
      <Modal statusBarTranslucent animationType="fade" transparent>
        <View className="flex-1 bg-zinc-900/20 items-center justify-center">
          <Camera />
        </View>
      </Modal>
    );
  }
);

const alertsContent = {
  denied: {
    title: "Im sorry, permission is required.",
    description:
      "To use the camera, permission must be granted. If you still want to use the camera, go to phone settings and grant it.",
  },
  askPermission: {
    title: "We need camera permission.",
    description:
      "To take this photo, camera permission must be granted. Press Ok to handle it.",
  },
};

const styles = StyleSheet.create({
  camera: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
});

interface CameraAlertProps {
  onPress?: () => void;
  title?: string;
  description?: string;
  icon: Icon;
}
function CameraAlert({ onPress, description, title, icon }: CameraAlertProps) {
  const Icon = icon;
  return (
    <View className="w-[80%] p-4 bg-white rounded-lg gap-4 items-center">
      <Icon size={48} color={COLORS.primary} />
      <Text size="2xl" weight="semibold" className="text-center">
        {title}
      </Text>
      <Text className="text-center">{description}</Text>
      <Button title="Ok" onPress={onPress} Pressable={TouchableOpacity} />
    </View>
  );
}
