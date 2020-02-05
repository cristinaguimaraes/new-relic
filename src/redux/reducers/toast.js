import {
  HIDE_TOAST_MESSAGE,
  SHOW_TOAST_MESSAGE
} from "redux/actions/constants";

export const initialState = {
  show: false,
  messageKey: null,
  type: null
};

export const toast = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_TOAST_MESSAGE:
      return { show: true, messageKey: action.payload.messageKey, type: action.payload.type};
    case HIDE_TOAST_MESSAGE:
      return initialState;
    default:
      return state;
  }
};
