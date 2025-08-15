import {
  BaseInputProps,
  InputDateProps,
  InputFileProps,
  InputTextProps,
} from "@core/types";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { Keyboard, Pressable, TextInput, View } from "react-native";
import { Text } from "../text/text.component";
import { inputStyle } from "./input-style";
import dayjs from "dayjs";
import { getExampleNumber } from "libphonenumber-js";
import { getCountry } from "@core/utils";
import examples from "libphonenumber-js/mobile/examples";
import { COLORS, Country } from "@core/const";
import BottomSheet from "@gorhom/bottom-sheet";
import colors from "tailwindcss/colors";
import * as Clipboard from "expo-clipboard";
import { IconEye, IconEyeClosed } from "@tabler/icons-react-native";
import { CountriesBottomSheet } from "../bottom-sheets/countries.bottom-sheet";
import { mmkv } from "src/store/mmkv";
import DatePicker from "react-native-date-picker";
import * as DocumentPicker from "expo-document-picker";

type OptionalInputTypes = InputDateProps | InputFileProps | InputTextProps;
export type InputProps = BaseInputProps & OptionalInputTypes;

export const Input = ({ disabled, ...props }: InputProps) => {
  // if (props.onPress || (props.type && ["date", "file"].includes(props.type))) {
  //   disabled = true;
  // }

  const [focus, setFocus] = useState(false);
  const [country, setCountry] = useState(getCountry());
  const [datePickerModal, setDatePickerModal] = useState(false);
  const countryBottomSheetRef = useRef<BottomSheet>(null);
  const [secureEntryText, setSecureEntryText] = useState(
    props.type === "password"
  );

  const onChangeText = useCallback((inputValue: string) => {
    if (!props.type) {
      return props.onChange?.(inputValue as any);
    }

    if (
      props.type === "email" ||
      props.type === "password" ||
      props.type === "phone" ||
      props.type === "text"
    ) {
      return props.onChange?.(inputValue);
    }

    return undefined;
  }, []);

  const value: string | undefined = useMemo(() => {
    if (!props.value) return undefined;

    if (props.type === "date") return dayjs(props.value).format("DD/MM/YYYY");

    if (props.type === "file") return props.value.assets?.[0]?.name ?? "";

    return props.value as string;
  }, [props.value]);

  const phoneExample = useMemo(() => {
    return getExampleNumber(country.code, examples);
  }, [country]);

  const placeholder = useMemo(() => {
    if (props.type === "phone") return phoneExample?.formatInternational();

    return props.placeholder;
  }, []);

  const autoCapitalize = useMemo(() => {
    if (props.type === "email" || props.type === "password") return "none";
    return "words";
  }, []);

  const iconColor = useMemo(() => {
    if (disabled) return colors.zinc[400];
    if (focus) return COLORS.primary;

    return colors.zinc[400];
  }, [focus]);

  const handlePasteClipboard = useCallback(async () => {
    const text = await Clipboard.getStringAsync();
    if (text && props.type === "text") {
      props.onChange?.(text);
    }
  }, []);

  const handleChangeCountry = useCallback((value: Country) => {
    mmkv.set("countryCode", value.code);
    setCountry(value);
    countryBottomSheetRef.current?.close();

    if (
      props.type === "email" ||
      props.type === "password" ||
      props.type === "phone" ||
      props.type === "text"
    ) {
      props.onChange?.("");
    }
  }, []);

  const handleOnPress = useCallback(() => {
    if (props.type === "date") return setDatePickerModal(true);
    if (props.type === "file") {
      return DocumentPicker.getDocumentAsync().then((res) => {
        props.onChange?.({
          canceled: res.canceled,
          assets: res.assets || [],
        })
      });
    }

    return props.onPress?.();
  }, []);

  return (
    <React.Fragment>
      <View
        style={{ width: "100%" }}
        className={`${props.containerClassName} gap-1`}
      >
        {/* Label */}
        {props.label ? (
          <Text size="md" weight="semibold" className="text-zinc-800">
            {props.label}
          </Text>
        ) : null}

        <View
          className={inputStyle({
            focus: focus && !props.loading && !disabled,
          })}
        >
          {/* Country flags for phone number */}
          {props.type === "phone" ? (
            <Pressable
              className={`p-2 px-4 h-full items-center justify-center border-r ${
                focus && !props.loading ? "border-primary" : "border-zinc-400"
              } `}
              onPress={() => {
                Keyboard.dismiss();
                countryBottomSheetRef.current?.expand();
              }}
            >
              <Text size="lg" weight="semibold" className="mt-0.5">
                {country.flag}
              </Text>
            </Pressable>
          ) : null}

          {/* Left Icon */}
          {props.icons?.left && props.type !== "phone" ? (
            <View className="p-2">
              <props.icons.left size={24} color={iconColor} />
            </View>
          ) : null}

          {/* Input */}
          {!props.onPress && (!props.type || ["text", "password", "email"].includes(props.type)) ? (
            <TextInput
              onChangeText={onChangeText}
              autoFocus={props.autoFocus}
              value={value}
              placeholder={placeholder}
              focusable={!disabled}
              onFocus={() => setFocus(true)}
              className="p-2 flex-1"
              editable={!props.loading && !disabled}
              cursorColor={COLORS.primary}
              multiline={props.multiline}
              textAlignVertical={props.textAlignVertical}
              autoCapitalize={autoCapitalize}
              keyboardType={
                props.type === "phone" ? "phone-pad" : props.keyboardType
              }
              secureTextEntry={secureEntryText}
              onBlur={(e) => {
                setFocus(false);
                props.onBlur?.(e);
              }}
              style={{ height: "100%", fontFamily: "Montserrat-Regular" }}
              textAlign={props.textAlign}
            />
          ) : (
            <Pressable
              onPress={handleOnPress}
              onBlur={(e) => {
                // setFocus(false);
                props.onBlur?.(e as any);
              }}
              // onFocus={() => setFocus(true)}
              className="p-2 flex-1 justify-center"
              style={{ height: "100%" }}
            >
              <Text numberOfLines={1} className={`${!value ? "text-zinc-400" : "text-black"}`}>{value || placeholder}</Text>
            </Pressable>
          )}

          {/* Right Icon */}
          {props.icons?.right && !props.paste && props.type !== "password" ? (
            <View className="p-2">
              <props.icons.right size={24} color={iconColor} />
            </View>
          ) : null}

          {/* Paste Option */}
          {props.paste && props.type !== "password" ? (
            <Pressable className="p-2" onPress={() => handlePasteClipboard()}>
              <Text className="text-primary font-semibold">Paste</Text>
            </Pressable>
          ) : null}

          {/* Password Icon */}
          {props.type === "password" ? (
            <Pressable
              className="p-2"
              onPress={() => setSecureEntryText((prev) => !prev)}
            >
              {secureEntryText ? (
                <IconEyeClosed size={24} color={iconColor} />
              ) : (
                <IconEye size={24} color={iconColor} />
              )}
            </Pressable>
          ) : null}
        </View>

        {/* Description */}
        {props.description && !props.error ? (
          <Text size="xs" className="text-zinc-800">
            {props.description}
          </Text>
        ) : null}

        {/* Error Message */}
        {props.error ? (
          <Text size="xs" className="text-primary">
            {props.error}
          </Text>
        ) : null}
      </View>
      
      {props.type === "phone" ? (
        <CountriesBottomSheet
          onCountrySelect={handleChangeCountry}
          ref={countryBottomSheetRef}
        />
      ) : null}

      {props.type === "date" ? (
        <DatePicker
          modal
          open={datePickerModal}
          date={props.value || new Date()}
          mode="date"
          onConfirm={(date) => {
            setDatePickerModal(false);
            props.onChange?.(date);
          }}
          onCancel={() => {
            setDatePickerModal(false);
          }}
        />
      ) : null}
    </React.Fragment>
  );
};
