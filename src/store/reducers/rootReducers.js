import { combineReducers } from "redux";
import { authReducer } from './login'
import { leadReducers } from './lead'
const reducers = combineReducers({
    auth: authReducer,
    lead: leadReducers,
});
export default reducers
