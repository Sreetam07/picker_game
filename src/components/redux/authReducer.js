import { LOGIN, LOGOUT } from './actionTypes';

const initialState = {
  isAuthenticated: false,
  loginError:null

};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      console.log("login....",action);
      const { username, password } = action.payload;
      if ((username === 'admin' && password === 'admin1234') || (username === 'guest' && password === 'guest1234')) {
        return {
          ...state,
          isAuthenticated: true,
          loginError:null
        };
      }
      return state;
    }
    case LOGOUT: {
      return {
        ...state,
        isAuthenticated: false,
        loginError:"Invalid credentials"
      };
    }
    default:
      return state;
  }
};

export default authReducer;
