const initialState = {
    loading: false,
    user: {},
};

export function authentication(state = initialState, action) {
    switch (action.type) {
        case "LOGIN_REQUEST":
            return {
                ...initialState,
                loading: true,
                user: {},
            };
        case "LOGIN_SUCCESS":
            debugger;
            return {
                ...initialState,
                loading: false,
                user: action.values.value,
            };
        case "LOGIN_FAILURE":
            return {
                ...initialState,
                user: {},
                error: true

            };
        default:
            return state;
    }
}
