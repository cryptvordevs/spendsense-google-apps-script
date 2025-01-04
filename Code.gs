function doGet(request) {
  const template = HtmlService.createTemplateFromFile('index');
  const recentTransactions = getRecentTransactions();
  template.recentTransactions = recentTransactions;
  return template.evaluate();
}

function getRecentTransactions() {
  const sheet = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID').getSheetByName('expenses');
  const data = sheet.getDataRange().getValues();
  if (data.length <= 1) return [];
  const transactions = data.slice(1);
  const sortedTransactions = transactions
    .map(row => ({
      date: new Date(row[0]),
      category: row[1],
      description: row[2],
      amount: row[3],
      paymentMethod: row[4],
      notes: row[5],
    }))
    .sort((a, b) => b.date - a.date)
    .slice(0, 10);
  return sortedTransactions.map(tx => [
    Utilities.formatDate(tx.date, Session.getScriptTimeZone(), 'MM.dd.yy hh:mm a'),
    tx.category,
    tx.description,
    tx.amount,
    tx.paymentMethod,
    tx.notes,
  ]);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function getDropdownValues() {
  const sheet = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID').getSheetByName('dropdown_options');
  const data = sheet.getDataRange().getValues();
  const categoriesSet = new Set();
  const descriptionsMap = {};
  const paymentMethodsSet = new Set();

  data.slice(1).forEach(row => {
    const category = row[0];
    const description = row[1];
    const paymentMethod = row[2];

    if (category) {
      categoriesSet.add(category);
      if (!descriptionsMap[category]) {
        descriptionsMap[category] = [];
      }
    }
    if (category && description) {
      descriptionsMap[category].push(description);
    }
    if (paymentMethod) {
      paymentMethodsSet.add(paymentMethod);
    }
  });

  return {
    categories: Array.from(categoriesSet),
    descriptions: descriptionsMap,
    paymentMethods: Array.from(paymentMethodsSet),
  };
}

function logExpense(data) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('expenses');
  sheet.appendRow([new Date(), ...data]);
}