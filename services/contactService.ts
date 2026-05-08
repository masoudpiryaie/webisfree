import type { ApiResponse, ContactFormValues } from "@/types/contact";

export async function createContactMessage(
  values: ContactFormValues,
): Promise<ApiResponse> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });

  const data = (await response.json()) as ApiResponse;

  if (!response.ok) {
    throw new Error(data.message || "Failed to send message.");
  }

  return data;
}
