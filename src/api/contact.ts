import request from "./request";
import { User } from "../types/user";

export interface ResponseData {
  message: string;
  result: string;
}

export const sendContact = async ({
  name,
  email,
  phone,
  birthday,
  message,
}: User) => {
  const fieldsData = {
    name: name.value,
    email: email.value,
    phone: phone.value,
    birthday: birthday.value,
    message: message.value,
  };

  try {
    const response = await request.post("contact", fieldsData);
    return response.data as ResponseData;
  } catch (error) {
    return error as ResponseData;
  }
};
