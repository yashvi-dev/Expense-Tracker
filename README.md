# Expense Tracker

An easy-to-use expense tracker built with React. This application allows you to manage your income and expenses effectively by adding, deleting, and viewing transactions. It helps you track your financial activities and manage your budget.

### Live Demo
You can view the live project here: [Expense Tracker Live Demo](https://expense-tracker-lyart-delta.vercel.app/)

---

## Features

- **Add Transactions**: Add new transactions with a description and amount (expenses are negative, income is positive).
- **Delete Transactions**: Remove transactions as needed.
- **View Balance**: View your total income, total expenses, and remaining balance.

---

## Tech Stack

- **Frontend:** React
- **State Management:** React `useReducer` (Context API)
- **Styling:** Custom CSS
- **Deployment:** Vercel

---

## Installation

### Prerequisites
Make sure you have the following installed:
- **Node.js** (v14 or above)
- **npm** (v6 or above) or **yarn**

### Steps to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/expense-tracker.git
   cd expense-tracker
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or if you're using Yarn:
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm start
   # or with Yarn:
   yarn start
   ```

4. **Open your browser and go to** `http://localhost:3000` to view the application.

---

## How It Works

### Add a Transaction
To add a new transaction:
- Enter a description (e.g., "Salary", "Flower", etc.)
- Enter the amount (negative value for expenses, positive for income)
- Click on "Add Transaction" to save the transaction.

### View Balance
The app displays:
- **Total Income**: Sum of all positive transactions.
- **Total Expenses**: Sum of all negative transactions.
- **Remaining Balance**: The difference between total income and total expenses.

### Delete a Transaction
To delete a transaction:
- Hover over the transaction, and click the delete button to remove it.

---

## Contributing

If you'd like to contribute to this project, feel free to fork the repository, create a branch, and submit a pull request.

### Steps for Contribution:
1. **Fork** the repository.
2. **Create a new branch**:
   ```bash
   git checkout -b feature-name
   ```
3. **Make your changes** and commit them:
   ```bash
   git commit -m 'Add new feature'
   ```
4. **Push to your forked repository**:
   ```bash
   git push origin feature-name
   ```
5. **Create a pull request** on GitHub.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- Built with [React](https://reactjs.org/) and [React Context API](https://reactjs.org/docs/context.html).
- A special thanks to the open-source community for their amazing tools and resources.
- Vercel for making easy deployment possible.


```

