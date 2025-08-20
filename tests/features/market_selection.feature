Feature: Market Selection Based on Location

  Scenario: Selecting Market at App Launch
    Given the app is launched for the first time
    And the device has location services enabled
    When the device's geographical location is determined
    Then the app selects the market corresponding to the user's location
