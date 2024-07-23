import Expenses from "./components/Expenses/expenses";
import React, {useState} from 'react' ;

import NewExpense from "./components/NewExpenses/NewExpense";
  let DUMMY_EXPENSE=[
    {
      id: 'e1',
      title: 'House Rent',
      amount: '10,000',
      date: new Date(2024, 7, 21)
    },
    {
      id: 'e2',
      title: 'Electricity Bill',
      amount: '6,000',
      date: new Date(2024, 7, 25)
    },
  ];

  function App(){

  const [expenses , setExpenses] = useState(DUMMY_EXPENSE);

   const addExpenseHandler = (expense) =>{
    const updatedExpense = [expense , ...expenses];
     setExpenses(updatedExpense);
   };

  return (
    <div>
      <h2>Your Expense Tracker</h2>
  <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
  <Expenses item={expenses} />
    </div>
  );
}

export default App;