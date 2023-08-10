import './ExpenseItem.css'
function ExpenseItem() 
{
const expenseDate = new Date(2023, 2, 28)
const expenseAmount = 285.84;
const expenseTiltle = "car insurance";
    return (
      <div className="expense-item">
        // <div>Date</div>
        // <div>Amount</div>
        // <h2>{Math.random()}</h2>
        // <h2>{expenseTiltle}</h2>

          <div>{expenseDate.toISOString()}</div> 
        <div>{expenseAmount}</div>
        <h2>{Math.random()}</h2>
        <h2>{expenseTiltle}</h2>
        <div className="expense-item-price">${expenseAmount}</div>
        <div>Title</div>
      </div>
    );
}

export default ExpenseItem;
