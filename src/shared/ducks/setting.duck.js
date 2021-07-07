import { createSlice } from '@reduxjs/toolkit';

export const namespace = "settings";

const slice = createSlice({
    name: namespace,
    initialState: {
        selectItems: []
    },
    reducers: {
        set: (state, action) => {
            let { payload } = action;
            let { ...rest } = payload;
            return {
                ...state,
                ...rest,
            };
        },
    },
});

export const { set } = slice.actions;

export function allItems(value) {
    return set({
      selectItems: value
    });
}


export const reducer = slice.reducer;

export const selectField = (s, key) => s[namespace][key];
export const selectIsMenuOpen = (s) => selectField(s, 'isMenuOpen');
export const selectIsMobile = (s) => selectField(s, 'isMobile');