import React from 'react';
import Expense from './Expense';

export default (props) => {
	return (
		<div>
			<div className="w-75 mx-auto">
				<div className="text-muted text-center h6 p-3">
					<div className="row">
						<div className="col-lg-5">
							<span className="py-3">TOTAL SPENDING:</span>
						</div>
						<div className="col-lg-5">
							<span className="bg-danger px-3 rounded text-light">
								GHS:{' '}
								{props.expenses.length === 0 ? (
									'0.0'
								) : (
									props.expenses.reduce((a, b) => a + b['amount'], 0)
								)}
							</span>
						</div>
					</div>
				</div>
			</div>

			{props.expenses.map((expense) => (
				<Expense
					key={expense.id}
					expense={expense}
					removeExpense={props.handleRemoveExpense}
					editExpense={props.handleEditExpense}
				/>
			))}
		</div>
	);
};
