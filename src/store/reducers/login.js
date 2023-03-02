import { LOGIN } from '../types';

const initialState = {
    login: {},
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            var loginValue = Object.assign({}, state, { login: action.payload })
            return loginValue;
        default: return state;
    }
}
