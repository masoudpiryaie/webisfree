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

export type Project = {
  title: string;
  label: string;
  image: string;
  href: string;
  github?: string;
  accent: string;
  tagColor: string;
  description: string;
  role: string;
  stack: string[];
  highlights: string[];
};
