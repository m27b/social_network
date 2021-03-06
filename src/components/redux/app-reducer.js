import { getAuthUserData } from "./auth-reducer";

const INITIALIZEDSECCSESS = "initiazed_seccsess";

let initilState = {
  initialized: false,
};

const appReducer = (state = initilState, action) => {
  switch (action.type) {
    case INITIALIZEDSECCSESS:
      return { ...state, initialized: true };

    default:
      return state;
  }
};

export const initializedSuccess = () => ({
  type: INITIALIZEDSECCSESS,
});

export const initializeApp = () => (dispatch) => {
  const promise = dispatch(getAuthUserData());
  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess());
  });
};

export default appReducer;
