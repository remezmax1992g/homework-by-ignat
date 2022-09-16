export type ThemeType = 'dark'| 'red'| 'some'
const CHANGE_THEME = "CHANGE-THEME"
const initState: ThemeType = 'some';

type ActionChangeTheme = ReturnType<typeof changeThemeC>

export const themeReducer = (state = initState, action: ActionChangeTheme): ThemeType => { // fix any
    switch (action.type) {
        case CHANGE_THEME: {
            return action.payload.theme;
        }
        default: return state;
    }
};

export const changeThemeC = (theme: ThemeType) => ({
    type: CHANGE_THEME,
    payload: {theme}}) as const;