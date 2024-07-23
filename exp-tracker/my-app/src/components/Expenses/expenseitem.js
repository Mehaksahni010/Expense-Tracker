import React , { useState } from 'react';
import './expenseitem.css' ;


import Expensedate from './expensedate';
import Card from '../UI/card';

function Expenseitem(props){

    return (
        <Card className='expense-item'>
           <Expensedate date= {props.date} />
            <div className='expense-item__desc'>
                <h2>{ props.title }</h2>
                <div className='expense-item__price'>Rs. {props.amount}</div>
            </div>
            
        </Card>
    );
}

export default Expenseitem;