export const validation = {
  username: {
    required: "*Username is required. Please fill in the field",
    minLength: {
      value: 5,
      message: "*Username must be 5 characters at least.",
    },
    maxLength: {
      value: 25,
      message: "*Username must be 25 characters maximum.",
    },
  },
  email: {
    required: "*Email is required. Please fill in field",
    pattern: {
      value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      message: "*Please enter a valid email.",
    },
  },
  password: {
    required: "*Password is required. Please fill in the field",
    minLength: {
      value: 8,
      message: "*Password must be at least 8 characters long.",
    },
    pattern: {
      value: !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/,
      message:
        "*Password should contain at least one uppercase letter, lowercase letter, digit, and special symbol.",
    },
  },
}
