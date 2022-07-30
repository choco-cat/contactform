export interface FieldData {
  value: string;
  error: string;
}

export interface User {
  name: FieldData;
  email: FieldData;
  phone: FieldData;
  birthday: FieldData;
  message: FieldData;
}
