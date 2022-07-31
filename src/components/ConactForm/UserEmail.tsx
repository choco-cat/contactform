import React, { ChangeEvent } from "react";
import cl from "./contactForm.module.scss";
import { validationForEmail } from "../../services/validation";
import { FieldData, User } from "./../../types/user";

const LENGTH_FOR_NAME = 61;

interface userEmailProps {
  email: FieldData;
  updateUser: (param: Partial<Record<keyof User, FieldData>>) => void;
}

export const UserEmail = ({ email, updateUser }: userEmailProps) => {
  const handleChangeEmail = (value: string) => {
    const error = validationForEmail(value);
    updateUser({ email: { value, error } });
  };

  return (
    <label className={cl.form__label}>
      Email
      <input
        className={cl.form__input}
        type="text"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleChangeEmail(e.target.value)
        }
        value={email.value}
        maxLength={LENGTH_FOR_NAME}
      />
      {email.error && <div className={cl.form__error}>{email.error}</div>}
    </label>
  );
};
