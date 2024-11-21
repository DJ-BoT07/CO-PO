import { auth } from "./firebase";

export const isUserLoggedIn = () => {
  return auth.currentUser !== null;
}; 