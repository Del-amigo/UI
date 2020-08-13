$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Functionality",
  "description": "",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 28,
      "value": "#    Given Navigate to website"
    },
    {
      "line": 29,
      "value": "#    When Enter valid username and invalid password"
    },
    {
      "line": 30,
      "value": "#    Then User should not login successfully and error message will display"
    }
  ],
  "line": 34,
  "name": "Login with invalid username and an invalid password (Negative scenario)",
  "description": "",
  "id": "login-functionality;login-with-invalid-username-and-an-invalid-password-(negative-scenario)",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "Navigate to website",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "Enter invalid username and invalid password",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "User should not login successfully and error message will display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.navigate_to_website()"
});
formatter.result({
  "duration": 5451991845,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enter_invalid_username_and_invalid_password()"
});
formatter.result({
  "duration": 251465633,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_not_login_successfully_and_error_message_will_display()"
});
formatter.result({
  "duration": 17733267,
  "status": "passed"
});
});