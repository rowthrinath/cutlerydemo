import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('the app is launched for the first time', async function() {
  // Code to simulate app launch
});

Given('the device has location services enabled', async function() {
  // Code to ensure location services are enabled
});

When('the device\'s geographical location is determined', async function() {
  // Code to get device location
});

Then('the app selects the market corresponding to the user\'s location', async function() {
  // Code to verify market selection based on location
  expect(await this.page.textContent('div')).toContain('Market based on location');
});
