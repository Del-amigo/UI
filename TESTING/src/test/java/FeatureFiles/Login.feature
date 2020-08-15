Feature: Login Functionality

  @SmokeTest
  Scenario Outline: Login with valid username and password (Positive scenario)

    Given Navigate to website
    When Enter valid "<username>" and "<password>"
    Then User should login successfully and redirected to appropriate page
    Examples:
      | username | password |
      | admin    | admin123 |


  @RegressionTest
  Scenario Outline: Login with valid username and an invalid password (Negative scenario)

    Given Navigate to website
    When Enter valid "<username>" and invalid "<password>"
    Then User should not login successfully and error message will display
    Examples:
      | username | password |
      | admin    | admin1   |


  @RegressionTest
  Scenario: Login with invalid username and an invalid password (Negative scenario)

    Given Navigate to website
    When Enter invalid username and invalid password
    Then User should not login successfully and error message will display


  @RegressionTest
  Scenario Outline: Login with invalid username and valid password (Negative scenario)

    Given Navigate to website
    When Enter invalid "<username>" and Valid "<password>"
    Then User should not login successfully and error message will display
    Examples:
      | username  | password |
      | admin2020 | admin123 |


  @RegressionTest
  Scenario: Login with with inactive credentials (Positive scenario)

#    Given Navigate to website
#    When Enter inactive Username and Password
#    Then User should not login successfully and error message will display


  @RegressionTest
  Scenario Outline: Login page for both, when the field is blank and Submit button is clicked
    Given Navigate to website
    When Enter empty "<username>" and empty "<password>"
    Then User should not login successfully and error message will display
    Examples:
      | username | password |
      |          |          |


  @RegressionTest
  Scenario: Verify if the data in password field is either visible as asterisk or bullet signs.

#    Given Navigate to website
#    When user enter the password
#    Then password is not visible and should be as asterisk or bullet signs

