import React,{useState} from 'react';
import './NewExpenses.css';
import ExpenseForm from './ExpenseForm';
const NewExpenses=(props)=>{
    const [isEditing,setIsEditing]=useState(false);

    const saveExpenseDataHandler=(enteredExpenseData)=>{
          const Data={
            ...enteredExpenseData
          };
          props.onAddExpense(Data)
          setIsEditing(false);
    };

    const startEditing=()=>{
        setIsEditing(true);
    }
    const stopEditing=()=>{
        setIsEditing(false);
    }


    return (
        <div className='new-expense '>
            {!isEditing && <button onClick={startEditing}>ADD EXPENSE</button>}
           { isEditing && <ExpenseForm  onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditing}></ExpenseForm>}
        </div>
    )
}
export default NewExpenses;