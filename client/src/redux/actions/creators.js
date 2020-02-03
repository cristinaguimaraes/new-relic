import {
    ADD_APP,
    DELETE_APP,
    SAVE_INITIAL_DATA,
} from "./constants";

export const onSaveInitialData = payload => ({ type: SAVE_INITIAL_DATA, payload });

export const onAddApp = payload => ({ type: ADD_APP, payload });

export const onDeleteApp = payload => ({ type: DELETE_APP, payload });
