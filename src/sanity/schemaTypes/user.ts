import { Rule } from "@sanity/types"; // Import the correct type

const user = {
  name: "user",
  type: "document",
  title: "Users",
  fields: [
    {
      name: "email",
      type: "string",
      title: "Email",
      validation: (Rule: Rule) =>
        Rule.required()
          .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, { name: "email", invert: false })
          .error("Enter a valid email address"),
    },
    {
      name: "password",
      type: "string",
      title: "Password",
      validation: (Rule: Rule) =>
        Rule.required().min(6).error("Password must be at least 6 characters"),
    },
  ],
};

export default user;
