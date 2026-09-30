import type { AuthErrors, SignInValues, SignUpValues } from "@/types/auth";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateName(name: string): string | undefined {
  const value = name.trim();
  if (!value) return "Full name is required";
  if (value.length < 2) return "Name must be at least 2 characters";
  return undefined;
}

export function validateEmail(email: string): string | undefined {
  const value = email.trim();
  if (!value) return "Email is required";
  if (!emailPattern.test(value)) return "Enter a valid email address";
  return undefined;
}

export function validatePassword(password: string): string | undefined {
  if (!password) return "Password is required";
  if (password.length < 8) return "Password must be at least 8 characters";
  if (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) return "Use at least one letter and one number";
  return undefined;
}

export function validateConfirmPassword(password: string, confirmPassword: string): string | undefined {
  if (!confirmPassword) return "Please confirm your password";
  if (password !== confirmPassword) return "Passwords do not match";
  return undefined;
}

export function validateSignUp(values: SignUpValues): AuthErrors {
  const errors: AuthErrors = {};
  errors.name = validateName(values.name);
  errors.email = validateEmail(values.email);
  errors.password = validatePassword(values.password);
  errors.confirmPassword = validateConfirmPassword(values.password, values.confirmPassword);
  return Object.fromEntries(Object.entries(errors).filter(([, error]) => error !== undefined)) as AuthErrors;
}

export function validateSignIn(values: SignInValues): AuthErrors {
  const errors: AuthErrors = {};
  errors.email = validateEmail(values.email);
  errors.password = values.password ? undefined : "Password is required";
  return Object.fromEntries(Object.entries(errors).filter(([, error]) => error !== undefined)) as AuthErrors;
}