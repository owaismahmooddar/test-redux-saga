const initialState = {
    loading: false,
    user: {},
};

export function authentication(state = initialState, action) {
    switch (action.type) {
        case "LOGIN_REQUEST":
            return {
                ...state,
                loading: true,
                user: {},
            };
        case "LOGIN_SUCCESS":
            debugger;
            return {
                ...state,
                loading: false,
                user: action.payload,
            };
        case "LOGIN_FAILURE":
            return {
                ...state,
                user: {},
                error: true

            };
        default:
            return state;
    }
}
