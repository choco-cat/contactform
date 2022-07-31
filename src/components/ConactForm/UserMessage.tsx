import React, { ChangeEvent } from "react";
import cl from "./contactForm.module.scss";
import { validationForMessage } from "../../services/validation";
import { FieldData, User } from "./../../types/user";

const LENGTH_FOR_MESSAGE = 300;

interface userMessageProps {
  message: FieldData;
  updateUser: (param: Partial<Record<keyof User, FieldData>>) => void;
}

export const UserMessage = ({ message, updateUser }: userMessageProps) => {
  const handleChangeMessage = (value: string) => {
    const error = validationForMessage(value);
    updateUser({ message: { value, error } });
  };

  return (
    <label className={cl.form__label}>
      Message
      <textarea
        className={cl.form__input}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          handleChangeMessage(e.target.value)
        }
        value={message.value}
        maxLength={LENGTH_FOR_MESSAGE}
      />
      {message.error && <div className={cl.form__error}>{message.error}</div>}
    </label>
  );
};
