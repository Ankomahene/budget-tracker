const expensesReducer = (state, action) => {
	switch (action.type) {
		case 'GET_EXPENSES':
			return action.expenses;
		case 'ADD_EXPENSE':
			return [ ...state, action.expense ];
		case 'REMOVE_EXPENSE':
			return state.filter((expense) => expense.id !== action.id);
		default:
			return state;
	}
};
