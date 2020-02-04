import { combineReducers } from 'redux';
import {apps} from "./apps";
import { toast } from 'react-toastify';

const reducers = combineReducers({
apps, toast,
});

export { reducers };