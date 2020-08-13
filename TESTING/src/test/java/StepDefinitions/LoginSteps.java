package StepDefinitions;

import POM.LoginPOM;
import Utilities.Driver;
import cucumber.api.java.en.*;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;

public class LoginSteps {

    WebDriver driver;
    LoginPOM loginPOM = new LoginPOM();

    @Given("^Navigate to website$")
    public void navigate_to_website()  {
        driver = Driver.getDriver();
        driver.get("D:\\QA COURSE\\HelloScrumProject\\UI\\Login.html");
        driver.manage().window().maximize();
    }

    @When("^Enter invalid username and invalid password$")
    public void enter_invalid_username_and_invalid_password()  {

        loginPOM.user_input.sendKeys("user_1@gmail.com");
        loginPOM.password_input.sendKeys("Qwerty2020@@");
        loginPOM.login_button.click();
    }

    @Then("^User should not login successfully and error message will display$")
    public void user_should_not_login_successfully_and_error_message_will_display()  {

        String alert_message = driver.switchTo().alert().getText();
        Assert.assertTrue(alert_message.contains("Incorrect"));
        driver.switchTo().alert().accept();

    }
}
