import { useMutation } from "@tanstack/react-query";
import { createContactMessage } from "@/services/contactService";

export function useCreateContactMessage() {
  return useMutation({
    mutationFn: createContactMessage,
  });
}
