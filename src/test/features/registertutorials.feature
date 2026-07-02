Feature: Register for TutorialsNinja website
@regression
Scenario: User should register successfully

Given the user is on the TutorialsNinja website
When the user clicks My Account
And the user clicks Register
And user enters first name "Priya"
And user enters last name "K"
And user enters email "priyajohnk77895867@gmail.com"
And user enters telephone "9876543210"
And user enters password "12345678"
And user enters confirm password "12345678"
And user selects the privacy policy
When the user clicks Continue button
Then user should see Your Account Has Been Created
When user clicks Continue after registration
