import request from "./request";
import { User } from "../types/User";

export interface ResponseData {
  message: string;
  error: string;
}

export const sendContact = async (userdata: User) => {
  const fieldsData = {
    name: userdata.name.value,
    email: userdata.email.value,
    phone: userdata.phone.value,
    birthday: userdata.birthday.value,
    message: userdata.message.value,
  };
  try {
    const response = await request.post(
      "http://localhost:4000/contact",
      fieldsData
    );
    return response.data as ResponseData;
  } catch (error) {
    return error as ResponseData;
  }
};
