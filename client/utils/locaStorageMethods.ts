import { isNotServer } from "./isNotServer";

export const getLocalStorage = (item: any) => {
  isNotServer() ? localStorage.getItem(item) : null;
};

export const setLocalStorage = (item: any) => {
  isNotServer() ? localStorage.setItem("query", item) : null;
};
