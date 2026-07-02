Feature: Use Authentication test for tutotialsninja
Background:
Given User navigate to the tutorialsninja
And User click Myaccount link
And User click the login link

@smoke
Scenario:Login should be successful
And User enter the email as "priya1234567@gmail.com"
And User enter the password1 as "12345678"
When User click login button
Then User should see Myaccount


Scenario:Login should not be successful
And User enter the email as "priya1234567@gmail.com"
And User enter the password1 as "12345678"
When User click login button
Then User should see the unsuccess error message