import React, { useState, useEffect } from 'react';
import Header from './Header';
import NewExpense from './NewExpense';
import Expenses from './Expenses';
import { v4 as uuid } from 'uuid';

export default () => {
	const [ item, setItem ] = useState('');
	const [ amount, setAmount ] = useState(0);
	const [ expenses, setExpenses ] = useState([]);

	useEffect(() => {
		JSON.parse(localStorage.getItem('expenses')) === null
			? setExpenses([])
			: setExpenses(JSON.parse(localStorage.getItem('expenses')));
	}, []);

	useEffect(
		() => {
			localStorage.setItem('expenses', JSON.stringify(expenses));
		},
		[ expenses ]
	);

	const handleAddExpense = () => {
		if (item.trim() === '') {
			alert('enter item name Eg. rent, car payment etc.');
		} else if (amount === 0) {
			alert('amount should not be Zero(0) or empty');
		} else {
			setExpenses([
				...expenses,
				{
					id: uuid(),
					item,
					amount
				}
			]);
			setItem('');
		}
	};

	const handleRemoveExpense = (id) => {
		setExpenses(expenses.filter((expense) => expense.id !== id));
	};

	const handleEditExpense = (id, { item, amount }) => {
		const edited = expenses.map((expense) => (expense.id === id ? { ...expense, item, amount } : expense));
		setExpenses(edited);
	};

	return (
		<div className="p-5">
			<Header />

			<div className="row">
				<div className="col-md-5">
					<NewExpense
						item={item}
						amount={amount}
						setItem={setItem}
						setAmount={setAmount}
						addExpense={handleAddExpense}
					/>
				</div>
				<div className="col-md-7">
					<Expenses
						handleRemoveExpense={handleRemoveExpense}
						handleEditExpense={handleEditExpense}
						expenses={expenses}
					/>
				</div>
			</div>
		</div>
	);
};
