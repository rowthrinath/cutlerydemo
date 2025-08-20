{
  "ui": [
    {
      "content": "import { Given, When, Then } from '@cucumber/cucumber';\nimport { expect } from '@playwright/test';\nimport { page } from '../playwright.config';\n\nGiven('the user is launching the app for the first time', async function () {\n  await page.goto('http://localhost:3000');\n});\n\nGiven('the device location service is enabled', async function () {\n  // Mock location service enabled\n  // This would be handled by mocking the geolocation API in Playwright\n});\n\nWhen('the app accesses the device's geographical location', async function () {\n  // Simulate accessing location\n  // This would typically involve mocking the browser's geolocation\n});\n\nThen('the app selects the market corresponding to the user\\'s current location', async function () {\n  const marketText = await page.textContent('h1');\n  expect(marketText).toBe('Welcome to the North America Market');\n});",
      "filename": "market_selection_ui_steps.ts"
    }
  ],
  "api": [
    {
      "content": "import { Given, When, Then } from '@cucumber/cucumber';\nimport { expect } from '@playwright/test';\nimport axios from 'axios';\n\nGiven('the user is launching the app for the first time', async function () {\n  // Assume this is the first launch\n  this.firstLaunch = true;\n});\n\nGiven('the device location service is enabled', async function () {\n  // Mock location service enabled\n  this.locationServiceEnabled = true;\n});\n\nWhen('the app accesses the device's geographical location', async function () {\n  if (this.locationServiceEnabled) {\n    // Simulate API call to get location\n    this.location = { latitude: 37.7749, longitude: -122.4194 };\n  }\n});\n\nThen('the app selects the market corresponding to the user\\'s current location', async function () {\n  if (this.location) {\n    const response = await axios.get('/api/market', { params: this.location });\n    expect(response.data).toEqual({\n      id: '1',\n      name: 'North America Market',\n      region: 'North America',\n    });\n  }\n});",
      "filename": "market_selection_api_steps.ts"
    }
  ],
  "unit": [
    {
      "content": "import { getMarketByLocation } from './MarketSelector';\n\ndescribe('MarketSelector', () => {\n  describe('getMarketByLocation', () => {\n    it('should return the correct market for given coordinates', async () => {\n      const market = await getMarketByLocation(37.7749, -122.4194);\n      expect(market).toEqual({\n        id: '1',\n        name: 'North America Market',\n        region: 'North America',\n      });\n    });\n  });\n});",
      "filename": "MarketSelector.test.ts"
    }
  ],
  "steps": [
    {
      "content": "import { Given, When, Then } from '@cucumber/cucumber';\nimport { expect } from '@playwright/test';\nimport { getUserLocation, getMarketByLocation } from '../components/MarketSelector';\n\nGiven('the user is launching the app for the first time', async function () {\n  // Assume this is the first launch\n  this.firstLaunch = true;\n});\n\nGiven('the device location service is enabled', async function () {\n  // Mock location service enabled\n  this.locationServiceEnabled = true;\n});\n\nWhen('the app accesses the device's geographical location', async function () {\n  if (this.locationServiceEnabled) {\n    this.location = await getUserLocation();\n  }\n});\n\nThen('the app selects the market corresponding to the user\\'s current location', async function () {\n  if (this.location) {\n    const market = await getMarketByLocation(this.location.latitude, this.location.longitude);\n    expect(market).toEqual({\n      id: '1',\n      name: 'North America Market',\n      region: 'North America',\n    });\n  }\n});",
      "filename": "market_selection_steps.ts"
    }
  ],
  "feature": [
    {
      "content": "Feature: Market Selection Based on Location\n\n  Scenario: Selecting Market at App Launch\n    Given the user is launching the app for the first time\n    And the device location service is enabled\n    When the app accesses the device's geographical location\n    Then the app selects the market corresponding to the user's current location",
      "filename": "market_selection.feature"
    }
  ]
}