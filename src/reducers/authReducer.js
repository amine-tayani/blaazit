import {
  CREATE_ACCOUNT,
  ERROR_CREATE_ACCOUNT,
  LOGIN_TO_ACCOUNT,
  ERROR_LOGIN_TO_ACCOUNT,
  RESET_PASSWORD,
  CHECK_IF_IS_LOGGED,
  LOGOUT,
  CHANGE_LOADING,
} from "../actions/auth"

const authReducer = (state, action) => {
  switch (action.type) {
    case CREATE_ACCOUNT:
      return {
        ...state,
        user: action.user,
        userToken: action.token,
        loading: false,
      }
    case ERROR_CREATE_ACCOUNT:
      return {
        ...state,
        userError: action.error,
      }
    case LOGIN_TO_ACCOUNT:
      return {
        ...state,
        user: action.user,
        userToken: action.token,
      }
    case CHANGE_LOADING:
      return {
        ...state,
        loading: action.loading,
      }
    case ERROR_LOGIN_TO_ACCOUNT:
      return {
        ...state,
        userError: action.error,
      }
    case CHECK_IF_IS_LOGGED:
      return {
        ...state,
        user: action.user,
        userToken: action.token,
      }

    case LOGOUT:
      return {
        ...state,
        user: action.user,
        userToken: action.token,
        userError: action.error,
      }
    case RESET_PASSWORD:
      return {}

    default:
      return state
  }
}
export default authReducer
