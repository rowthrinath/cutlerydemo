{
  "ui": [
    {
      "content": "import { Given, When, Then } from '@cucumber/cucumber';\nimport { Builder, By, until } from 'selenium-webdriver';\n\nlet driver;\n\nGiven('the user is launching the app for the first time', async function () {\n  driver = await new Builder().forBrowser('chrome').build();\n  await driver.get('http://localhost:3000');\n});\n\nGiven('the device location service is enabled', async function () {\n  // Mock or ensure location service is enabled\n  // This can be a no-op if the environment is already set up\n});\n\nWhen('the app accesses the device\\'s geographical location', async function () {\n  // Simulate location access\n  // This step might involve mocking location data in tests\n});\n\nThen('the app selects the market corresponding to the user\\'s current location', async function () {\n  const marketElement = await driver.wait(until.elementLocated(By.css('h1')), 10000);\n  const marketText = await marketElement.getText();\n  if (!marketText.includes('Market')) {\n    throw new Error('Market not selected based on location');\n  }\n  await driver.quit();\n});",
      "filename": "ui_market_selection_steps.ts"
    }
  ],
  "api": [
    {
      "content": "import { Given, When, Then } from '@cucumber/cucumber';\nimport axios from 'axios';\n\nlet response;\n\nGiven('the user is launching the app for the first time', function () {\n  // Initial setup if needed\n});\n\nGiven('the device location service is enabled', function () {\n  // Ensure location service is enabled\n});\n\nWhen('the app accesses the device\\'s geographical location', async function () {\n  response = await axios.get('http://localhost:3000/api/location');\n});\n\nThen('the app selects the market corresponding to the user\\'s current location', function () {\n  const market = response.data.market;\n  if (!market) {\n    throw new Error('Market not selected based on location');\n  }\n});",
      "filename": "api_market_selection_steps.ts"
    }
  ],
  "unit": [
    {
      "content": "import React from 'react';\nimport { render, screen } from '@testing-library/react';\nimport MarketSelector from '../components/MarketSelector';\n\njest.mock('../components/MarketSelector', () => ({\n  __esModule: true,\n  default: async () => {\n    const MockComponent = () => <div>Welcome to the Northern Market</div>;\n    return <MockComponent />;\n  },\n}));\n\ndescribe('MarketSelector Component', () => {\n  it('should render the correct market based on location', async () => {\n    render(<MarketSelector />);\n    const marketElement = await screen.findByText(/Welcome to the Northern Market/i);\n    expect(marketElement).toBeInTheDocument();\n  });\n});",
      "filename": "MarketSelector.test.tsx"
    }
  ],
  "steps": [
    {
      "content": "import { Given, When, Then } from '@cucumber/cucumber';\nimport { Builder, By, until } from 'selenium-webdriver';\n\nlet driver;\n\nGiven('the user is launching the app for the first time', async function () {\n  driver = await new Builder().forBrowser('chrome').build();\n  await driver.get('http://localhost:3000');\n});\n\nGiven('the device location service is enabled', async function () {\n  // Mock or ensure location service is enabled\n  // This can be a no-op if the environment is already set up\n});\n\nWhen('the app accesses the device\\'s geographical location', async function () {\n  // Simulate location access\n  // This step might involve mocking location data in tests\n});\n\nThen('the app selects the market corresponding to the user\\'s current location', async function () {\n  const marketElement = await driver.wait(until.elementLocated(By.css('h1')), 10000);\n  const marketText = await marketElement.getText();\n  if (!marketText.includes('Market')) {\n    throw new Error('Market not selected based on location');\n  }\n  await driver.quit();\n});",
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