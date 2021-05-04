export const validation = {
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
  },
}
