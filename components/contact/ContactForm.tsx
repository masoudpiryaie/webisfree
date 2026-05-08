"use client";

import { useRef } from "react";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import AppButton from "@/components/ui/AppButton";
import { useCreateContactMessage } from "@/hooks/useCreateContactMessage";
import type { ContactFormValues } from "@/types/contact";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const { mutate, isPending, isSuccess, isError, error } =
    useCreateContactMessage();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const values: ContactFormValues = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    mutate(values, {
      onSuccess: () => {
        formRef.current?.reset();
      },
    });
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div style={{ display: "grid", gap: "20px" }}>
        <TextField name="name" label="Name" required fullWidth />

        <TextField name="email" label="Email" type="email" required fullWidth />

        <TextField
          name="message"
          label="Message"
          required
          fullWidth
          multiline
          minRows={5}
        />

        <AppButton type="submit" disabled={isPending}>
          {isPending ? "Sending..." : "Send Message"}
        </AppButton>

        {isSuccess ? (
          <Alert severity="success">Your message was sent successfully.</Alert>
        ) : null}

        {isError ? (
          <Alert severity="error">
            {error instanceof Error ? error.message : "Something went wrong."}
          </Alert>
        ) : null}
      </div>
    </form>
  );
}
