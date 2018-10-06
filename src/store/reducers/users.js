const initialState = {
    users: [
        {
            email: 'test@test.com',
            password: 'test'
        }
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return {
                ...state
            };
    }
};

export default reducer;
