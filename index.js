// script.js
document.addEventListener('DOMContentLoaded', loadExpenses);
document.getElementById('expense-form').addEventListener('submit', addExpense);

let totalAmount = 0;

function loadExpenses() {
    const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    expenses.forEach(expense => {
        addExpenseToDOM(expense.description, expense.amount,expense.date);
        totalAmount += expense.amount;
    });
    document.getElementById('total-amount').textContent = totalAmount.toFixed(2);
}

function addExpense(event) {
    event.preventDefault();

    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const date = document.getElementById("date").value;

    if (description && !isNaN(amount)) {
        addExpenseToDOM(description, amount,date);

        const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
        expenses.push({ description, amount, date });
        localStorage.setItem('expenses', JSON.stringify(expenses));

        totalAmount += amount;
        document.getElementById('total-amount').textContent = totalAmount.toFixed(2);

        document.getElementById('description').value = '';
        document.getElementById('amount').value = '';
        document.getElementById('date').value = '';

    }
}

function addExpenseToDOM(description, amount, date) {
    const expenseList = document.getElementById('expense-list');
    const expenseItem = document.createElement('li');
    const deleteButton =document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.style.color = "red";
    deleteButton.style.backgroundcolor="white";
    deleteButton.className += "delete";
    deleteButton.style.width = "100px";
    expenseItem.textContent = `${date}-${description}: ${amount.toFixed(2)}`;
    expenseList.appendChild(expenseItem);
    expenseItem.appendChild(deleteButton);
}

