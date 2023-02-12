export const CHANGE_THEME = "CHANGE_THEME";

export function changeTheme() {
  return function (dispatch) {
    dispatch({ type: CHANGE_THEME });
  };
}
