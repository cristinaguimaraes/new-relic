import { combineReducers } from 'redux';
import {apps} from "./apps";
import { toast } from './toast';

const reducers = combineReducers({
apps, toast,
});

export { reducers };