const initState = {
    user: { id: "", first_name: "", last_name: "", email: "", token: "", role: "" },
    basket: []
}

const rootReducer = (state = initState, action) => {

    switch (action.type) {
        case "USER_LOGGED_IN":
            return { ...state, user: action.user }
        default:
            return state;

    }
}


export default rootReducer;
