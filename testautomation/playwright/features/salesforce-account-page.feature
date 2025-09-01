Feature: Salesforce Account Page
  As a user
  I want to verify that all links and buttons are visible and enabled
  So that I can ensure the page is functioning correctly

  Scenario: Verify links and buttons on the Salesforce account page
    Given the user is on the Salesforce account page
    Then the user should see all the links
    And all the links and buttons should be enabled
