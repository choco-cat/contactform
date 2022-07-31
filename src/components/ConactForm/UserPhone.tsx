import React, { ChangeEvent } from "react";
import cl from "./contactForm.module.scss";
import { validationForPhone } from "../../services/validation";
import { FieldData, User } from "./../../types/user";

const LENGTH_FOR_PHONE = 11;

interface userPhoneProps {
  phone: FieldData;
  updateUser: (param: Partial<Record<keyof User, FieldData>>) => void;
}

export const UserPhone = ({ phone, updateUser }: userPhoneProps) => {
  const handleChangePhone = (value: string) => {
    if (value[0] !== "7") {
      value = "7" + value;
    }
    value = value.replace(/([^\d]*)/g, "");
    const error = validationForPhone(value);
    updateUser({ phone: { value, error } });
  };

  return (
    <label className={cl.form__label}>
      Phone
      <input
        className={cl.form__input}
        type="text"
        placeholder="7__________"
        value={phone.value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleChangePhone(e.target.value)
        }
        minLength={LENGTH_FOR_PHONE}
        maxLength={LENGTH_FOR_PHONE}
      />
      {phone.error && <div className={cl.form__error}>{phone.error}</div>}
    </label>
  );
};
