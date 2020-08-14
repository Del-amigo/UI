$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Functionality",
  "description": "",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#  PAGE TITLE (NOT DONE)"
    },
    {
      "line": 5,
      "value": "#  Verify the Title of Login page is not empty"
    },
    {
      "line": 6,
      "value": "#  Verify the Title of Login page contains \"Techno Bank\""
    },
    {
      "line": 7,
      "value": "#  Verify the Title of all pages contains appropriate value corresponding to its functionality"
    },
    {
      "line": 10,
      "value": "#  Labels and Textboxes for username, password (NOT DONE)"
    },
    {
      "line": 11,
      "value": "#"
    },
    {
      "line": 12,
      "value": "#  Verify that the login screen contains elements such as Username, Password, Sign in button"
    },
    {
      "line": 13,
      "value": "#  Verify that all the fields such as Username, Password has a valid placeholder"
    },
    {
      "line": 14,
      "value": "#  Verify that all the fields such as Username, Password has a valid label"
    }
  ],
  "line": 18,
  "name": "Login with valid username and password (Positive scenario)",
  "description": "",
  "id": "login-functionality;login-with-valid-username-and-password-(positive-scenario)",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "Navigate to website",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Enter valid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User should login successfully and redirected to appropriate page",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "login-functionality;login-with-valid-username-and-password-(positive-scenario);",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 24,
      "id": "login-functionality;login-with-valid-username-and-password-(positive-scenario);;1"
    },
    {
      "cells": [
        "admin",
        "admin123"
      ],
      "line": 25,
      "id": "login-functionality;login-with-valid-username-and-password-(positive-scenario);;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "Login with valid username and password (Positive scenario)",
  "description": "",
  "id": "login-functionality;login-with-valid-username-and-password-(positive-scenario);;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "Navigate to website",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Enter valid \"admin\" and \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User should login successfully and redirected to appropriate page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.navigate_to_website()"
});
formatter.result({
  "duration": 6266089639,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 13
    },
    {
      "val": "admin123",
      "offset": 25
    }
  ],
  "location": "LoginSteps.enter_valid_and(String,String)"
});
formatter.result({
  "duration": 278137576,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_login_successfully_and_redirected_to_appropriate_page()"
});
formatter.result({
  "duration": 10637870,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:494)\r\n\tat org.testng.Assert.assertTrue(Assert.java:42)\r\n\tat org.testng.Assert.assertTrue(Assert.java:52)\r\n\tat StepDefinitions.LoginSteps.user_should_login_successfully_and_redirected_to_appropriate_page(LoginSteps.java:48)\r\n\tat ✽.Then User should login successfully and redirected to appropriate page(Login.feature:22)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 53376856,
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : You are logged in as admin}\n  (Session info: chrome\u003d84.0.4147.125): You are logged in as admin\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027HP\u0027, ip: \u0027192.168.1.153\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u002714.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.125, chrome: {chromedriverVersion: 84.0.4147.30 (48b3e868b4cc0..., userDataDir: D:\\Temp\\scoped_dir11344_209...}, goog:chromeOptions: {debuggerAddress: localhost:65499}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: e73d48034b968d09e08e7edea01c5b88\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\r\n\tat StepDefinitions.Hooks.afterClass(Hooks.java:30)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:84)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:714)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:901)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1231)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:127)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:111)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:767)\r\n\tat org.testng.TestRunner.run(TestRunner.java:617)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:334)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:329)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:291)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:240)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1224)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1149)\r\n\tat org.testng.TestNG.run(TestNG.java:1057)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:110)\r\n",
  "status": "failed"
});
});