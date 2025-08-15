import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const passwordSchema = yup.object().shape({
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(32, "Password must not exceed 32 characters")
    .matches(
      /^(?=.*[a-z])/,
      "Password must contain at least one lowercase letter"
    )
    .matches(
      /^(?=.*[A-Z])/,
      "Password must contain at least one uppercase letter"
    )
    .matches(/^(?=.*[0-9])/, "Password must contain at least one number")
    .matches(
      /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/,
      "Password must contain at least one special character"
    )
    .test(
      "no-whitespace",
      "Password must not contain whitespace",
      (value) => !/\s/.test(value)
    ),
  confirmPassword: yup
    .string()
    .required("Please confirm your password")
    .oneOf([yup.ref("password")], "Passwords do not match"),
});

// Resolver for React Hook Form
export const passwordFormResolver = yupResolver(passwordSchema);
export const passwordRequirementText =  
  "Use 8-32 characters, with at least one uppercase, lowercase, number, and special character (!@#$)."