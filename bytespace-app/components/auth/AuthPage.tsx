"use client";

import { useEffect, useRef, useState, type ChangeEvent, type FocusEvent, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthCard } from "@/components/auth/AuthCard";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { PasswordField } from "@/components/auth/PasswordField";
import { SocialAuthSection, type SocialProvider } from "@/components/auth/SocialAuthSection";
import { StatusBanner } from "@/components/auth/StatusBanner";
import { TextField } from "@/components/auth/TextField";
import { PrimaryButton } from "@/components/common/PrimaryButton";
import { delay, getDemoUser, saveDemoUser, verifyCredentials } from "@/lib/demoAuth";
import { validateConfirmPassword, validateEmail, validateName, validatePassword, validateSignIn, validateSignUp } from "@/lib/validators";
import type { AuthErrors, AuthField, SignUpValues, StatusMessage } from "@/types/auth";

type AuthMode = "signin" | "signup";
type TouchedFields = Partial<Record<AuthField, boolean>>;

const emptyStatus: StatusMessage = { type: "idle", message: "" };
const initialValues: SignUpValues = { name: "", email: "", password: "", confirmPassword: "" };

function validateField(field: AuthField, values: SignUpValues, mode: AuthMode): string | undefined {
  switch (field) {
    case "name":
      return mode === "signup" ? validateName(values.name) : undefined;
    case "email":
      return validateEmail(values.email);
    case "password":
      return mode === "signup" ? validatePassword(values.password) : values.password ? undefined : "Password is required";
    case "confirmPassword":
      return mode === "signup" ? validateConfirmPassword(values.password, values.confirmPassword) : undefined;
  }
}

export function AuthPage({ mode }: { mode: AuthMode }) {
  const isSignup = mode === "signup";
  const router = useRouter();
  const [values, setValues] = useState<SignUpValues>(initialValues);
  const [errors, setErrors] = useState<AuthErrors>({});
  const [touched, setTouched] = useState<TouchedFields>({});
  const [status, setStatus] = useState<StatusMessage>(emptyStatus);
  const [submitting, setSubmitting] = useState(false);
  const [loadingProvider, setLoadingProvider] = useState<SocialProvider | null>(null);
  const operationController = useRef<AbortController | null>(null);
  const inputRefs = useRef<Partial<Record<AuthField, HTMLInputElement | null>>>({});
  const busy = submitting || loadingProvider !== null;

  useEffect(() => () => operationController.current?.abort(), []);

  function startOperation(): AbortController {
    operationController.current?.abort();
    const controller = new AbortController();
    operationController.current = controller;
    return controller;
  }

  function onFieldChange(field: AuthField) {
    return (event: ChangeEvent<HTMLInputElement>) => {
      const nextValues = { ...values, [field]: event.currentTarget.value };
      setValues(nextValues);
      setStatus(emptyStatus);

      setErrors((currentErrors) => {
        const nextErrors = { ...currentErrors };
        if (touched[field] || currentErrors[field]) nextErrors[field] = validateField(field, nextValues, mode);
        if (field === "password" && isSignup && (touched.confirmPassword || currentErrors.confirmPassword)) {
          nextErrors.confirmPassword = validateConfirmPassword(nextValues.password, nextValues.confirmPassword);
        }
        return nextErrors;
      });
    };
  }

  function onFieldBlur(field: AuthField) {
    return (_event: FocusEvent<HTMLInputElement>) => {
      setTouched((current) => ({ ...current, [field]: true }));
      setErrors((current) => ({ ...current, [field]: validateField(field, values, mode) }));
    };
  }

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;

    const fieldOrder: AuthField[] = isSignup
      ? ["name", "email", "password", "confirmPassword"]
      : ["email", "password"];
    const nextErrors = isSignup
      ? validateSignUp(values)
      : validateSignIn({ email: values.email, password: values.password });
    setErrors(nextErrors);
    setTouched(Object.fromEntries(fieldOrder.map((field) => [field, true])) as TouchedFields);

    const firstInvalid = fieldOrder.find((field) => nextErrors[field]);
    if (firstInvalid) {
      window.requestAnimationFrame(() => inputRefs.current[firstInvalid]?.focus());
      return;
    }

    const controller = startOperation();
    setSubmitting(true);
    setStatus({
      type: "loading",
      message: isSignup ? "Creating your account…" : "Checking your credentials…",
    });

    try {
      await delay(1200, controller.signal);
      if (controller.signal.aborted) return;

      if (isSignup) {
        try {
          saveDemoUser({ name: values.name.trim(), email: values.email.trim(), password: values.password });
        } catch {
          setSubmitting(false);
          setStatus({ type: "error", message: "Couldn't save your account in this browser." });
          return;
        }

        setSubmitting(false);
        setStatus({ type: "success", message: "Account created successfully! Redirecting to sign in…" });
        await delay(1500, controller.signal);
        if (!controller.signal.aborted) router.push("/signin");
        return;
      }

      const result = verifyCredentials(values.email, values.password);
      if (!result.ok) {
        const hasDemoAccount = getDemoUser() !== null;
        setSubmitting(false);
        setValues((current) => ({ ...current, password: "" }));
        setStatus({
          type: "error",
          message: `Invalid email or password.${hasDemoAccount ? "" : " No demo account found — please sign up first."}`,
        });
        window.requestAnimationFrame(() => inputRefs.current.password?.focus());
        return;
      }

      const firstName = result.user.name.trim().split(/\s+/)[0] || result.user.name;
      setSubmitting(false);
      setStatus({ type: "success", message: `Login successful! Welcome back, ${firstName}.` });
      await delay(1500, controller.signal);
      if (!controller.signal.aborted) router.push("/");
    } catch {
      if (!controller.signal.aborted) {
        setSubmitting(false);
        setStatus({ type: "error", message: "Something went wrong. Please try again." });
      }
    }
  }

  async function connectSocial(provider: SocialProvider) {
    if (busy) return;
    const controller = startOperation();
    const name = provider === "google" ? "Google" : "Facebook";
    setLoadingProvider(provider);
    setStatus({ type: "loading", message: `Connecting to ${name}…` });
    await delay(1200, controller.signal);
    if (controller.signal.aborted) return;
    setLoadingProvider(null);
    setStatus({ type: "info", message: `${name} authentication is not configured in this demo.` });
  }

  const disabled = busy;

  return (
    <AuthLayout mode={mode}>
      <AuthCard>
        <form noValidate onSubmit={submitForm} className="flex flex-1 flex-col">
          <div className="text-[18px] font-normal text-[#003BE2]">{isSignup ? "Create an Account" : "Sign In"}</div>
          <h1 className="mt-[8px] font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[clamp(28px,3.1vw,44px)] font-semibold leading-[120%] tracking-[-0.01em] text-[#242528]">
            {isSignup ? <>Welcome to<br />ByteSpace</> : "Welcome Back"}
          </h1>

          <div className="auth-form-fields mt-[32px] flex flex-col gap-[20px] sm:mt-[40px] sm:gap-[24px]">
            {isSignup && (
              <TextField
                id="name"
                name="name"
                label="Full Name"
                placeholder="Jamie Davis"
                autoComplete="name"
                value={values.name}
                error={errors.name}
                disabled={disabled}
                onChange={onFieldChange("name")}
                onBlur={onFieldBlur("name")}
                inputRef={(node) => { inputRefs.current.name = node; }}
              />
            )}
            <TextField
              id="email"
              name="email"
              label="Email"
              type="email"
              placeholder="designer@example.com"
              autoComplete="email"
              value={values.email}
              error={errors.email}
              disabled={disabled}
              onChange={onFieldChange("email")}
              onBlur={onFieldBlur("email")}
              inputRef={(node) => { inputRefs.current.email = node; }}
            />
            <PasswordField
              id="password"
              name="password"
              label="Password"
              placeholder="********"
              autoComplete={isSignup ? "new-password" : "current-password"}
              value={values.password}
              error={errors.password}
              disabled={disabled}
              onChange={onFieldChange("password")}
              onBlur={onFieldBlur("password")}
              inputRef={(node) => { inputRefs.current.password = node; }}
            />
            {isSignup && (
              <PasswordField
                id="confirmPassword"
                name="confirmPassword"
                label="Confirm Password"
                placeholder="********"
                autoComplete="new-password"
                value={values.confirmPassword}
                error={errors.confirmPassword}
                disabled={disabled}
                onChange={onFieldChange("confirmPassword")}
                onBlur={onFieldBlur("confirmPassword")}
                inputRef={(node) => { inputRefs.current.confirmPassword = node; }}
              />
            )}
          </div>

          <div className="mt-[16px] min-h-0">
            <StatusBanner status={status} />
          </div>

          <div className="auth-primary-row mt-[24px] flex justify-end max-sm:[&>button]:w-full">
            <PrimaryButton
              type="submit"
              disabled={disabled}
              loading={submitting}
              className="h-[46px] px-[24px] py-0 text-[18px]"
            >
              {submitting ? (isSignup ? "Creating account…" : "Signing in…") : isSignup ? "Continue" : "Sign In"}
            </PrimaryButton>
          </div>

          <SocialAuthSection
            className="auth-social-section"
            loadingProvider={loadingProvider}
            disabled={submitting}
            onProviderClick={connectSocial}
          />

          <div className="auth-footer mt-auto flex items-center justify-center gap-[4px] pt-[24px] text-center text-[16px] text-[#4B4C53]">
            {isSignup ? (
              <>
                <span>Already have an account?</span>
                <Link href="/signin" className="text-[#003BE2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003BE2]">Login</Link>
              </>
            ) : (
              <>
                <span>New user?</span>
                <Link href="/signup" className="text-[#003BE2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003BE2]">Create an account</Link>
              </>
            )}
          </div>
        </form>
      </AuthCard>
    </AuthLayout>
  );
}