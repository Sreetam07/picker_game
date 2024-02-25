import { LOGIN, LOGOUT,PICK_COINS } from './actionTypes';

export const login = (username, password) => ({
  type: LOGIN,
  payload: { username, password },
});

export const logout = () => ({
  type: LOGOUT,
});

export const pickCoins = (pickedCoins) => {
    return {
      type: PICK_COINS,
      payload: pickedCoins,
    };
  };