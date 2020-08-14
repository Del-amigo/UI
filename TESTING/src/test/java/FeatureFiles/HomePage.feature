#  PAGE TITLE (NOT DONE)

#  Verify the Title of all pages contains appropriate value corresponding to its functionality


#  Labels and Textboxes for username, password (NOT DONE)
#
#  Verify that the login screen contains elements such as Username, Password, Sign in button
#  Verify that all the fields such as Username, Password has a valid placeholder
#  Verify that all the fields such as Username, Password has a valid label

  Feature: Login Page Title

    @RegressionTest
    Scenario: Verify the Title of Login page

      Given Navigate to website
      When Title of Login page is not empty
      Then Title of Login page contains "Techno Bank"


      Scenario: Labels and Textboxes for username and password

        Given Navigate to website

