import React, { useState, ChangeEvent } from "react";
import { validationField } from "../../services/validation";
import cl from "./form.module.scss";
import { FieldData } from "../../types/User";
import { sendContact } from "../../api/contact.api";

const LENGTH_PHONE = 12;
const LENGTH_NAME = 61;
const LENGTH_MESSAGE = 300;

const initialStateForForm = {
  name: { value: "" } as FieldData,
  email: { value: "" } as FieldData,
  phone: { value: "" } as FieldData,
  birthday: { value: "" } as FieldData,
  message: { value: "" } as FieldData,
};

const ContactForm: React.FC = () => {
  const [user, setUser] = useState(initialStateForForm);
  const [statusMessage, setStatusMessage] = useState("");
  const { name, email, phone, birthday, message } = user;
  const handleSubmit = async () => {
    // Validate all fields
    handleChangeName(name.value);
    handleChangeEmail(email.value);
    handleChangePhone(phone.value);
    handleChangeBirthday(birthday.value);
    handleChangeMessage(message.value);
    const response = await sendContact(user);
    setStatusMessage(response.message);
    // if errors = 0, send request
  };

  const handleChangeName = (value: string) => {
    const error = validationField("name", value);
    setUser({ ...user, name: { value: value.toUpperCase(), error } });
  };

  const handleChangeEmail = (value: string) => {
    const error = validationField("email", value);
    setUser({ ...user, email: { value, error } });
  };

  const handleChangePhone = (value: string) => {
    const error = validationField("phone", value);
    setUser({ ...user, phone: { value, error } });
  };

  const handleChangeBirthday = (value: string) => {
    const error = validationField("birthday", value);
    setUser({ ...user, birthday: { value, error } });
  };

  const handleChangeMessage = (value: string) => {
    const error = validationField("message", value);
    setUser({ ...user, message: { value, error } });
  };

  return (
    <>
      <form className={cl.form}>
        <label className={cl.form__label}>
          Your Name
          <input
            className={cl.form__input}
            type="text"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChangeName(e.target.value)
            }
            maxLength={LENGTH_NAME}
            value={name.value}
          />
          {name.error && <div className={cl.form__error}>{name.error}</div>}
        </label>
        <label className={cl.form__label}>
          Email
          <input
            className={cl.form__input}
            type="text"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChangeEmail(e.target.value)
            }
            value={email.value}
            maxLength={LENGTH_NAME}
          />
          {email.error && <div className={cl.form__error}>{email.error}</div>}
        </label>
        <label className={cl.form__label}>
          Phone
          <input
            className={cl.form__input}
            type="text"
            placeholder="+7__________"
            value={phone.value}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChangePhone(e.target.value)
            }
            minLength={LENGTH_PHONE}
            maxLength={LENGTH_PHONE}
          />
          {phone.error && <div className={cl.form__error}>{phone.error}</div>}
        </label>
        <label className={cl.form__label}>
          Birthday
          <input
            className={cl.form__input}
            type="date"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChangeBirthday(e.target.value)
            }
            value={birthday.value}
            minLength={3}
            maxLength={15}
          />
          {birthday.error && (
            <div className={cl.form__error}>{birthday.error}</div>
          )}
        </label>
        <label className={cl.form__label}>
          Message
          <textarea
            className={cl.form__input}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              handleChangeMessage(e.target.value)
            }
            value={message.value}
            maxLength={LENGTH_MESSAGE}
          />
          {message.error && (
            <div className={cl.form__error}>{message.error}</div>
          )}
        </label>
        <input type="button" value="Send" onClick={handleSubmit} />
        {statusMessage}
      </form>
    </>
  );
};

export default ContactForm;
