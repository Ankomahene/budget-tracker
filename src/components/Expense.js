import React, { useState } from 'react';
import '../style/Expense.css';

export default ({ expense, removeExpense, editExpense }) => {
	const [ updatedItem, setUpdatedItem ] = useState('');
	const [ updatedAmount, setUpdatedAmount ] = useState(0);

	return (
		<div className="d-flex justify-content-between align-items-center mx-auto my-2 p-1 custom">
			<div className="ml-4 text-muted">{expense.item}</div>
			<div className="bg-info rounded px-2 text-light">GHS {expense.amount}</div>
			<div className="d-flex">
				<div className="dropdown dropleft">
					<button
						onClick={() => {
							setUpdatedItem(expense.item);
							setUpdatedAmount(expense.amount);
						}}
						className="btn text-secondary"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						<i className="fas fa-edit" />
					</button>

					<div className="dropdown-menu p-4" style={{ width: '250px' }} aria-labelledby="editExpenseWindow">
						<h5 className="text-muted my-2 text-center">Edit Expense</h5>
						<div className="form-group">
							<input
								value={updatedItem}
								onChange={(e) => setUpdatedItem(e.target.value)}
								type="email"
								className="form-control"
								placeholder={expense.item}
							/>
						</div>
						<div className="form-group">
							<input
								onChange={(e) => setUpdatedAmount(Number(e.target.value))}
								type="number"
								className="form-control"
								id="exampleDropdownFormEmail1"
								placeholder={expense.amount}
							/>
						</div>
						<button
							onClick={() => editExpense(expense.id, { item: updatedItem, amount: updatedAmount })}
							className="btn btn-success w-100"
							type="button"
						>
							Update
						</button>
					</div>
				</div>
				<div>
					<button className="btn text-danger mx-2" onClick={() => removeExpense(expense.id)}>
						<i className="fas fa-trash" />
					</button>
				</div>
			</div>
		</div>
	);
};
