export default {
    name: "user",
    type: "document",
    title: "Users",
    fields: [
      {
        name: "email",
        type: "string",
        title: "Email",
        validation: (Rule: any) =>
          Rule.required().regex(
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            { name: "email", invert: false }
          ).error("Enter a valid email address"),
      },
      {
        name: "password",
        type: "string",
        title: "Password",
        validation: (Rule: any) =>
          Rule.required().min(6).error("Password must be at least 6 characters"),
      },
    ],
  };
  