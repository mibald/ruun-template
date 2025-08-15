import { countries, Country } from "@core/const/countries";
import { mmkv } from "src/store/mmkv";

export function getCountry(): Country {
  const countryCode = mmkv.getString("countryCode") || countries[0].code;
  const country = countries.find((c) => c.code === countryCode);
  
  return country || countries[0];
}