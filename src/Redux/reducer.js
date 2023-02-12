import { CHANGE_THEME } from "./action";

const initialState = {
  themeStatus: true,
};

export default function Reducer(state = initialState, { type }) {
  switch (type) {
    case CHANGE_THEME:
      return { ...state, themeStatus: !state.themeStatus };

    default:
      return state;
  }
}
