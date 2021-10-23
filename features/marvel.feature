Feature: To test the functionality in "The Marvel App"

Background:

    Given the user is on login page

Scenario: The one where user logs in using valid credentials
    When User clicks on search button
    When User Search for "AVENGERS" in the COMICS section
    And User Check and verify number of results "20"
    And User Check and verify number of pages "154"
