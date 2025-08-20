import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('the Balance Sheet Highlights section is accessed for a company', async function() {
  await this.page.goto('http://localhost:3000');
});

When('the section contains \'NaN\' values in any field', async function() {
  // Simulate NaN values in the balance sheet
  await this.page.evaluate(() => {
    const data = { assets: 100000, liabilities: NaN, equity: 50000 };
    window.localStorage.setItem('balanceSheetData', JSON.stringify(data));
  });
});

Then('the app displays a message indicating incomplete data', async function() {
  const messageText = await this.page.textContent('div');
  expect(messageText).toContain('Data is incomplete due to NaN values.');
});

Then('suggests alternative sources or methods to retrieve the data', async function() {
  const suggestionText = await this.page.textContent('div');
  expect(suggestionText).toContain('Please check alternative sources or methods to retrieve the data.');
});
