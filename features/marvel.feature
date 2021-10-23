@skip
Feature: To test the functionality in "The Marvel App"

Background:

    Given the user is on login page

Scenario: The one where user logs in using valid credentials
    When User clicks on search button
    When User Search for "AVENGERS" in the COMICS section
    And User Check and verify number of results "20"
    And User Check and verify number of pages "154"

Scenario: Navigate to the Shop Section(See Pic 2)
    When User select the "Complete Your Collection" option
    When User filter by Age "Kids"
    When User Sort by price low to high
    When User Add 2 Marvel Logo Pins
    When User Check and verify at the basket side pop up that the subtotal is "$19.98"