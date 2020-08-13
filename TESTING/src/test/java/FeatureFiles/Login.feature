Feature: Login Functionality

#  PAGE TITLE (NOT DONE)

#  Verify the Title of Login page is not empty
#  Verify the Title of Login page contains "Techno Bank"
#  Verify the Title of all pages contains appropriate value corresponding to its functionality


#  Labels and Textboxes for username, password (NOT DONE)
#
#  Verify that the login screen contains elements such as Username, Password, Sign in button
#  Verify that all the fields such as Username, Password has a valid placeholder
#  Verify that all the fields such as Username, Password has a valid label



  Scenario: Login with valid username and password (Positive scenario)

#    Given Navigate to website
#    When Enter valid username and password
#    Then User should login successfully and redirected to appropriate page



  Scenario: Login with valid username and an invalid password (Negative scenario)

#    Given Navigate to website
#    When Enter valid username and invalid password
#    Then User should not login successfully and error message will display


  @SmokeTest
  Scenario: Login with invalid username and an invalid password (Negative scenario)

    Given Navigate to website
    When Enter invalid username and invalid password
    Then User should not login successfully and error message will display


  Scenario: Login with invalid username and an valid password (Negative scenario)

#    Given Navigate to website
#    When Enter invalid Username and Valid Password
#    Then User should not login successfully and error message will display


  Scenario: Login with with inactive credentials (Positive scenario)

#    Given Navigate to website
#    When Enter inactive Username and Password
#    Then User should not login successfully and error message will display


  @RegressionTest
  Scenario: Login page for both, when the field is blank and Submit button is clicked
#    Given Navigate to website
#     When Enter empty username and empty password
#     Then User should not login successfully and error message will display


  Scenario: Verify if the data in password field is either visible as asterisk or bullet signs.

#    Given Navigate to website
#    When user enter the password
#    Then password is not visible and should be as asterisk or bullet signs

