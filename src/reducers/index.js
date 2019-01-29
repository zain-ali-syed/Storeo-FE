const initState = {
    user: { name: "", email: "", isAdmin: false, token: "" },
    basket: []
}

const rootReducer = (state = initState, action) => {

    switch (action.type) {

        default:
            return state;

    }
}


export default rootReducer;
