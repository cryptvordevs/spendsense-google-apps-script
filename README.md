# SpendSense Google Apps Script Web App

SpendSense is a Google Apps Script web app that allows you to track expenses with a user-friendly interface. This web app makes it easy to log and view your expenses, with the data stored securely in Google Sheets.

## Features

- Simple and intuitive UI for logging and viewing expenses.
- Customizable categories and options for expense tracking.
- Data is stored in a Google Spreadsheet, ensuring it is easily accessible and secure.
- Real-time updates to your spreadsheet as you add or modify expenses.

## Getting Started

### Prerequisites

Before you begin, make sure you have the following:

- A Google account.
- A Google Spreadsheet to store your expense data.
- Basic knowledge of Google Apps Script and Google Sheets.

### Setup

1. **Clone the Repository**

   Start by cloning the repository to your local machine or directly copying the project to your Google Apps Script dashboard.

   git clone https://github.com/cryptvordevs/spendsense-google-apps-script.git

2. **Set Up Your Google Spreadsheet**

Open Google Sheets and create a new spreadsheet.
Name it according to your preferences (e.g., Expense Tracker).
Ensure the following sheets are included:
expenses: A sheet to store your expense entries (you can modify the name later).
dropdown_options: A sheet containing various options for dropdowns (such as categories and payment methods).

3. **Replace the Spreadsheet ID in the Code**

Open the Code.gs file in the Google Apps Script editor and replace YOUR_SPREADSHEET_ID with the actual ID of your Google Spreadsheet. The spreadsheet ID can be found in the URL of the spreadsheet: https://docs.google.com/spreadsheets/d/YOUR_SPREADSHEET_ID/edit

Example: const sheet = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID').getSheetByName('expenses');

4. **Check Sheet Names**

The script expects the sheet names to be expenses and dropdown_options. If you have named your sheets differently, you will need to update the sheet names in the Code.gs file.

Look for the following lines in Code.gs: 

const sheet = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID').getSheetByName('expenses');

const sheet = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID').getSheetByName('dropdown_options');

Update 'expenses' and 'dropdown_options' to match the actual sheet names you have used in your spreadsheet.

5. **Deploy the Web App**

After setting up the code and spreadsheet, go to the Deploy section in the Apps Script editor.
Choose Test deployments and follow the prompts to deploy the web app.
Set the permissions for who can access and use the app.

6. **Usage**
Once the web app is deployed, you can start logging expenses through the web interface. Use the form to enter details such as category, description, amount, payment method and any notes you may wan to add. 

The data will automatically be stored in the expenses sheet of your connected Google Spreadsheet.

7. **Contributing**
Feel free to fork the repository, submit issues, or create pull requests if you'd like to contribute improvements or new features.

8. **Issues**
If you encounter any bugs or issues, please open an issue in the repository, and we’ll do our best to resolve it.

