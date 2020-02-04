import {
    ADD_APP,
    DELETE_APP, HIDE_TOAST_MESSAGE,
    SAVE_INITIAL_DATA, SHOW_TOAST_MESSAGE,
} from './constants';

export const onSaveInitialData = payload => ({ type: SAVE_INITIAL_DATA, payload });

export const onAddApp = payload => ({ type: ADD_APP, payload });

export const onDeleteApp = payload => ({ type: DELETE_APP, payload });

export const onShowToastMessage = payload => ({ type: SHOW_TOAST_MESSAGE, payload });
export const onHideToastMessage = payload => ({ type: HIDE_TOAST_MESSAGE, payload });
