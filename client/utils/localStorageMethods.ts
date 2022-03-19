import { isNotServer } from "./isNotServer";

export const getLocalStorage = (item: any) => {
  isNotServer() ? localStorage.getItem(item) : null;
};

export const setLocalStorage = (name: string, item: any) => {
  isNotServer() ? localStorage.setItem(name, item) : null;
};
