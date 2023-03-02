import { LEAD } from '../types';

const initialState = {
    lead: {}
}
export const leadReducers = (state = initialState, action) => {
    switch(action.type) {
        case LEAD:
            var leadValue = Object.assign({}, state, { lead: action.payload })
            return leadValue;
        default: return state;
    }
}
