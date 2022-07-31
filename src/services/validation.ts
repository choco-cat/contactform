import { User } from "../types/user";

export const validationForName = (value: string) => {
  return !/^[A-Za-z]{3,30} [A-Za-z]{3,30}$/.test(value)
    ? "The field must contain two words from 3 to 30 letter characters long!"
    : "";
};

export const validationForEmail = (value: string) => {
  return !/^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i.test(value as string)
    ? "Email is incorrect!"
    : "";
};

export const validationForPhone = (value: string) => {
  return !/^7[\d]{10}$/.test(value as string) ? "Phone is incorrect!" : "";
};

export const validationForBirthday = (value: string) => {
  return !value ? "Date is incorrect!" : "";
};

export const validationForMessage = (value: string) => {
  return (value && (value.length < 10 || value.length > 300)) || !value
    ? "Message length must be greater than 3 and less than 300!"
    : "";
};

export const validationAllFields = ({
  name,
  email,
  phone,
  birthday,
  message,
}: User) => {
  return {
    name: {
      value: name.value,
      error: validationForName(name.value),
    },
    email: {
      value: email.value,
      error: validationForEmail(email.value),
    },
    phone: {
      value: phone.value,
      error: validationForPhone(phone.value),
    },
    birthday: {
      value: birthday.value,
      error: validationForBirthday(birthday.value),
    },
    message: {
      value: message.value,
      error: validationForMessage(message.value),
    },
  };
};

export const hasValidationErrors = ({
  name,
  email,
  phone,
  birthday,
  message,
}: User) => {
  return (
    name.error !== "" ||
    email.error !== "" ||
    phone.error !== "" ||
    birthday.error !== "" ||
    message.error !== ""
  );
};
