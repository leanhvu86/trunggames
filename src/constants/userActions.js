import { LOGIN_SUCCESS, LOG_OUT, UPDATE_USER } from './action-types/user-actions';

//login action
export const login = (user) => {
  return {
    type: LOGIN_SUCCESS,
    user
  };
};
//logout action
export const logout = (id) => {
  return {
    type: LOG_OUT,
    id
  };
};
//subtract qt action
export const updateUser = (user) => {
  return {
    type: UPDATE_USER,
    user
  };
};
