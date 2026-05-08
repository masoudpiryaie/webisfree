export type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

export type ContactMessage = ContactFormValues & {
  createdAt: Date;
};

export type ApiResponse = {
  message: string;
};
