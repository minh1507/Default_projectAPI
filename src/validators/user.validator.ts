import { user } from "../models/user.interface";

export const formData = (data: user) => {
  if (data.username && data.password && data.username!=data.password) {
    return true;
  }
  return false;
};

export const password = (data: user) => {
  let pattern: any = new RegExp(
    "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^A-Za-z0-9]).{8,20}$"
  );
  return pattern.test(data.password);
};

export const username = (data: user) => {
  if(data.username.length > 5){
    return true
  }
  return false
}
