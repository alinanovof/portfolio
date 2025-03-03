export interface FormField {
  id: string;
  name: string;
  label: string;
  type: "text" | "email" | "textarea";
  required: boolean;
  placeholder?: string;
}

export const formFields: FormField[] = [
  {
    id: "name",
    name: "name",
    label: "Name",
    type: "text",
    required: true,
  },
  {
    id: "email",
    name: "email",
    label: "Email",
    type: "email",
    required: true,
  },
  {
    id: "subject",
    name: "subject",
    label: "Subject",
    type: "text",
    required: true,
  },
  {
    id: "message",
    name: "message",
    label: "Message",
    type: "textarea",
    required: true,
  },
];
