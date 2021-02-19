export const isAuth = (): boolean => {
  return localStorage.getItem("@tokenApp") ? true : false;
};
