Feature: Search Product in TutorialsNinja

Background:
Given User is on the TutorialsNinja home page

@smoke
Scenario: User searches for a valid product

When User enters product name "MacBook"
And User clicks the search button
Then User should see the searched product

@regression
Scenario: User searches for an invalid product

When User enters product name "Samsung TV"
And User clicks the search button
Then User should see no product message