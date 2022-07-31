import React, { ChangeEvent } from "react";
import cl from "./contactForm.module.scss";
import { validationForBirthday } from "../../services/validation";
import { FieldData, User } from "./../../types/user";

interface userBirthdayProps {
  birthday: FieldData;
  updateUser: (param: Partial<Record<keyof User, FieldData>>) => void;
}

export const UserBirthday = ({ birthday, updateUser }: userBirthdayProps) => {
  const handleChangeBirthday = (value: string) => {
    const error = validationForBirthday(value);
    updateUser({ birthday: { value, error } });
  };

  return (
    <label className={cl.form__label}>
      Birthday
      <input
        className={cl.form__input}
        type="date"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleChangeBirthday(e.target.value)
        }
        value={birthday.value}
      />
      {birthday.error && <div className={cl.form__error}>{birthday.error}</div>}
    </label>
  );
};
