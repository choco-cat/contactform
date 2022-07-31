import React, { ChangeEvent } from "react";
import cl from "./contactForm.module.scss";
import { validationForName } from "../../services/validation";
import { FieldData, User } from "./../../types/user";

const LENGTH_FOR_NAME = 61;

interface userNameProps {
  name: FieldData;
  updateUser: (param: Partial<Record<keyof User, FieldData>>) => void;
}

export const UserName = ({ name, updateUser }: userNameProps) => {
  const handleChangeName = (value: string) => {
    const error = validationForName(value);
    updateUser({ name: { value: value.toUpperCase(), error } });
  };

  return (
    <label className={cl.form__label}>
      Your Name
      <input
        className={cl.form__input}
        type="text"
        value={name.value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleChangeName(e.target.value)
        }
        maxLength={LENGTH_FOR_NAME}
      />
      {name.error && <div className={cl.form__error}>{name.error}</div>}
    </label>
  );
};
