Feature: Analyze Balance Sheet Highlights

  Scenario: Handling NaN Values in Balance Sheet Highlights
    Given the Balance Sheet Highlights section is accessed for a company
    When the section contains 'NaN' values in any field
    Then the app displays a message indicating incomplete data
    And suggests alternative sources or methods to retrieve the data
