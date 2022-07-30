import { User } from "../types/User";

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
  return !value ? "Wrong date!" : "";
};

export const validationForMessage = (value: string) => {
  return (value && (value.length < 10 || value.length > 300)) || !value
    ? "message length must be greater than 3 and less than 300!"
    : "";
};

export const validationAllFields = (user: User) => {
  const newUser = { ...user };
  const { name, email, phone, birthday, message } = newUser;
  newUser.name = {
    ...name,
    error: validationForName(newUser.name.value),
  };
  newUser.email = {
    ...email,
    error: validationForEmail(newUser.email.value),
  };
  newUser.phone = {
    ...phone,
    error: validationForPhone(newUser.phone.value),
  };
  newUser.birthday = {
    ...birthday,
    error: validationForBirthday(newUser.birthday.value),
  };
  newUser.message = {
    ...message,
    error: validationForMessage(newUser.message.value),
  };
  return newUser;
};
