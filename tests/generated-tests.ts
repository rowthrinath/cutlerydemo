{
  "ui": [
    {
      "content": "import { Given, When, Then } from '@cucumber/cucumber';\nimport { expect } from '@playwright/test';\nimport { Page } from 'playwright';\n\nlet page: Page;\n\nGiven('the user is launching the app for the first time', async () => {\n  // Setup code to simulate app launch\n  page = await browser.newPage();\n  await page.goto('http://localhost:3000');\n});\n\nGiven('the device location service is enabled', async () => {\n  // Mock location service\n  await page.context().grantPermissions(['geolocation']);\n  await page.context().setGeolocation({ latitude: 37.7749, longitude: -122.4194 });\n});\n\nWhen('the app accesses the device\\'s geographical location', async () => {\n  // No additional action needed, location is set in previous step\n});\n\nThen('the app selects the market corresponding to the user\\'s current location', async () => {\n  const content = await page.textContent('h1');\n  expect(content).toBe('Welcome to Northern Market');\n});\n",
      "filename": "market_selection_ui_steps.ts"
    }
  ],
  "api": [
    {
      "content": "import { Given, When, Then } from '@cucumber/cucumber';\nimport axios from 'axios';\nimport { expect } from 'chai';\n\nlet response;\n\nGiven('the user is launching the app for the first time', async () => {\n  // No setup needed for API test\n});\n\nGiven('the device location service is enabled', async () => {\n  // No setup needed for API test\n});\n\nWhen('the app accesses the device\\'s geographical location', async () => {\n  response = await axios.get('http://localhost:3000/api/location', {\n    params: { latitude: 37.7749, longitude: -122.4194 }\n  });\n});\n\nThen('the app selects the market corresponding to the user\\'s current location', async () => {\n  expect(response.data.market).to.equal('Northern Market');\n});\n",
      "filename": "market_selection_api_steps.ts"
    }
  ],
  "unit": [
    {
      "content": "import { getMarketByLocation } from '../utils/location';\n\ndescribe('getMarketByLocation', () => {\n  it('should return Northern Market for positive latitude', () => {\n    const market = getMarketByLocation(37.7749, -122.4194);\n    expect(market).toBe('Northern Market');\n  });\n\n  it('should return Southern Market for negative latitude', () => {\n    const market = getMarketByLocation(-37.7749, -122.4194);\n    expect(market).toBe('Southern Market');\n  });\n});\n",
      "filename": "location.test.ts"
    }
  ],
  "steps": [
    {
      "content": "import { Given, When, Then } from '@cucumber/cucumber';\nimport { expect } from '@playwright/test';\nimport { Page } from 'playwright';\n\nlet page: Page;\n\nGiven('the user is launching the app for the first time', async () => {\n  // Setup code to simulate app launch\n  page = await browser.newPage();\n  await page.goto('http://localhost:3000');\n});\n\nGiven('the device location service is enabled', async () => {\n  // Mock location service\n  await page.context().grantPermissions(['geolocation']);\n  await page.context().setGeolocation({ latitude: 37.7749, longitude: -122.4194 });\n});\n\nWhen('the app accesses the device\\'s geographical location', async () => {\n  // No additional action needed, location is set in previous step\n});\n\nThen('the app selects the market corresponding to the user\\'s current location', async () => {\n  const content = await page.textContent('h1');\n  expect(content).toBe('Welcome to Northern Market');\n});\n",
      "filename": "market_selection_steps.ts"
    }
  ],
  "feature": [
    {
      "content": "Feature: Market Selection Based on Location\n\n  Scenario: Selecting Market at App Launch\n    Given the user is launching the app for the first time\n    And the device location service is enabled\n    When the app accesses the device's geographical location\n    Then the app selects the market corresponding to the user's current location\n",
      "filename": "market_selection.feature"
    }
  ]
}