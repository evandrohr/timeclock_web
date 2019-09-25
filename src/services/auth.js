export const TOKEN_KEY = "@auth-token";
export const USER_ID = "@user_id";
export const USER_NAME = "@user_name";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_ID);
  localStorage.removeItem(USER_NAME);
};

export const setCurrentUserId = user_id =>   {
  localStorage.setItem(USER_ID, user_id)
};

export const getCurrentUserId = () => localStorage.getItem(USER_ID);

export const setCurrentUserName = user_name =>   {
  localStorage.setItem(USER_NAME, user_name)
};
export const getCurrentUserName = () => localStorage.getItem(USER_NAME);