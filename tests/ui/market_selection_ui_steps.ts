import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('the app is launched for the first time', async function() {
  await this.page.goto('http://localhost:3000');
});

Given('the device has location services enabled', async function() {
  // Assume location services are enabled
});

When('the device\'s geographical location is determined', async function() {
  // Mock location determination
  await this.page.evaluate(() => {
    navigator.geolocation.getCurrentPosition = (success) => {
      success({ coords: { latitude: 51.1, longitude: 45.3 } });
    };
  });
});

Then('the app selects the market corresponding to the user\'s location', async function() {
  const marketText = await this.page.textContent('div');
  expect(marketText).toContain('Market based on location');
});
