Feature: Lead Management

  Scenario: Verify lead details are displayed correctly
    Given I am on the lead details page
    When I view the lead information
    Then I should see the lead name as "Karen Boyd"
    And I should see the company name as "The Very Group Limited"
    And I should see the job title as "Research Manager"
    And I should see the email as "karen.boyd@theverygroup.com"
    And I should see the phone number as "+44 775 475 8357"

  Scenario: Verify lead status update
    Given I am on the lead details page
    When I update the lead status to "Converted"
    Then the lead status should be updated to "Converted"

  Scenario: Verify website link is correct
    Given I am on the lead details page
    When I click on the website link
    Then I should be navigated to "https://theverygroup.jobs/"

  Scenario: Verify engagement history is empty
    Given I am on the lead details page
    Then the engagement history should display "No engagement history to display"
