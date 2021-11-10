import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const IncomeExpenses = () => {

    const { transactions } = useContext(GlobalContext)

    const amounts = transactions.map(transaction => transaction.amount) 

    const incomes = amounts
        .filter(amount => amount >= 0)
        .reduce((acc, amount) => acc += amount, 0)
        .toFixed(2)

    const expenses = amounts
        .filter(amount => amount < 0)
        .reduce((acc, amount) => acc += amount, 0)
        .toFixed(2)

    return (
        <>
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">{incomes}€</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">{expenses}€</p>
            </div>
        </div>
        </>
    )
}
