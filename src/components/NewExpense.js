import React from 'react';

export default (props) => {
	return (
		<div className="border-right px-5">
			<h4>Add New Expense</h4>
			<div>
				<div className="form-group">
					<label htmlFor="itemField">Item</label>
					<input
						value={props.item}
						onChange={(e) => props.setItem(e.target.value)}
						type="text"
						className="form-control"
						id="itemField"
						placeholder="eg. water bill, rent"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="amountField">Amount</label>
					<input
						onChange={(e) => props.setAmount(Number(e.target.value))}
						type="number"
						className="form-control"
						placeholder="0.0"
					/>
				</div>
				<button onClick={props.addExpense} className="btn btn-primary w-100">
					Save
				</button>
			</div>
		</div>
	);
};
