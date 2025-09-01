import { Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { SalesforceAccountPage } from '../pages/salesforce-account-page';

Given('the user is on the Salesforce account page', async function() {
  const page = this.page;
  this.salesforceAccountPage = new SalesforceAccountPage(page);
  await this.salesforceAccountPage.navigate();
});

Then('the user should see all the links', async function() {
  const linksVisible = await this.salesforceAccountPage.verifyLinksVisible();
  expect(linksVisible).toBe(true);
});

Then('all the links and buttons should be enabled', async function() {
  const elementsEnabled = await this.salesforceAccountPage.verifyElementsEnabled();
  expect(elementsEnabled).toBe(true);
});
