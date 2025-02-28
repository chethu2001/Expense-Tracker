// script.js
document.addEventListener('DOMContentLoaded', loadExpenses);
document.getElementById('expense-form').addEventListener('submit', addExpense);

let totalAmount = 0;

function loadExpenses() {
    const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    expenses.forEach(expense => {
        addExpenseToDOM(expense.description, expense.amount);
        totalAmount += expense.amount;
    });
    document.getElementById('total-amount').textContent = totalAmount.toFixed(2);
}

function addExpense(event) {
    event.preventDefault();

    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (description && !isNaN(amount)) {
        addExpenseToDOM(description, amount);

        const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
        expenses.push({ description, amount });
        localStorage.setItem('expenses', JSON.stringify(expenses));

        totalAmount += amount;
        document.getElementById('total-amount').textContent = totalAmount.toFixed(2);

        document.getElementById('description').value = '';
        document.getElementById('amount').value = '';
    }
}

function addExpenseToDOM(description, amount) {
    const expenseList = document.getElementById('expense-list');
    const expenseItem = document.createElement('li');
    expenseItem.textContent = `${description}: ${amount.toFixed(2)}`;
    expenseList.appendChild(expenseItem);
}
