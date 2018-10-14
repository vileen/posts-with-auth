import * as actionTypes from '../actions/actionTypes';

// list needed to display authors dummy data
// current represents logged in user
const initialState = {
    current: {},
    list: {
        1: { email: 'test@test.com', password: 'test', name: 'FirstName1 LastName1' },
        2: { email: 'test2@test.com', password: 'test', name: 'FirstName2 LastName2' },
        3: { email: 'test3@test.com', password: 'test', name: 'FirstName3 LastName3' },
        4: { email: 'test4@test.com', password: 'test', name: 'FirstName4 LastName4' },
        5: { email: 'test5@test.com', password: 'test', name: 'FirstName5 LastName5' },
        6: { email: 'test6@test.com', password: 'test', name: 'FirstName6 LastName6' },
        7: { email: 'test7@test.com', password: 'test', name: 'FirstName7 LastName7' },
        8: { email: 'test8@test.com', password: 'test', name: 'FirstName8 LastName8' },
        9: { email: 'test9@test.com', password: 'test', name: 'FirstName9 LastName9' },
        10: { email: 'test10@test.com', password: 'test', name: 'FirstName10 LastName10' }
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_LOGGED_IN_USER: {
            const current = state.list[action.payload];
            return {
                ...state,
                current
            };
        }
        default: {
            return {
                ...state
            };
        }
    }
};

export default reducer;
