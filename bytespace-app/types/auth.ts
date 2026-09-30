export type DemoUser = {
  name: string;
  email: string;
  password: string;
};

export type SignUpValues = DemoUser & {
  confirmPassword: string;
};

export type SignInValues = Pick<DemoUser, "email" | "password">;

export type SignUpField = keyof SignUpValues;
export type SignInField = keyof SignInValues;
export type AuthField = SignUpField;
export type AuthErrors = Partial<Record<AuthField, string>>;

export type AuthStatus = "idle" | "loading" | "success" | "error" | "info";

export type StatusMessage = {
  type: AuthStatus;
  message: string;
};