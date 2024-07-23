import React from 'react';

import './expenses.css' ;
import Expenseitem from './expenseitem';
import Card from '../UI/card';

function Expenses(props){
    return (
        <Card className='expenses'>
       {
         props.item.map(
             expense =>(
                 <Expenseitem
                   date={expense.date}
                   title={expense.title}
                   amount={expense.amount}>
                 </Expenseitem>
             )
         )
       }
        
        </Card>
    );
}

export default Expenses;