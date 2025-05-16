export const SIGNUP_DATA = 'AUTH/SIGNUP_DATA';
export const LOGIN_DATA = 'AUTH/LOGIN_DATA';
export const HAS_LOGED_IN = 'AUTH/HAS_LOGED_IN';
export const RESET_AUTH = 'AUTH/RESET_AUTH';
export const SELECTED_ADD = 'AUTH/SELECTED_ADD';
export const ALLCART = 'AUTH/ALLCART';

export const userInitialState = {
  signupData: {},
  loginData: {},
  hasLogedIn: {},
  selectedAddress: {},
  allcart: {},
};

export default (state = userInitialState, action: any) => {
  switch (action.type) {
    case SIGNUP_DATA:
      return {
        ...state,
        signupData: action.data,
      };

    case LOGIN_DATA:
      return {
        ...state,
        loginData: action.data,
      };

    case HAS_LOGED_IN:
      return {
        ...state,
        hasLogedIn: action.data,
      };

    case RESET_AUTH:
      return {
        signupData: {},
        loginData: {},
        hasLogedIn: {},
      };

    case SELECTED_ADD:
      return {
        ...state,
        selectedAddress: action.data,
      };
    case ALLCART:
      return {
        ...state,
        allcart: action.data,
      };

    default:
      return state;
  }
};
