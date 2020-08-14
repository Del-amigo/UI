package StepDefinitions;

import POM.LoginPOM;
import Utilities.Driver;
import cucumber.api.PendingException;
import cucumber.api.java.en.*;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;

public class LoginSteps {

    WebDriver driver;
    LoginPOM loginPOM = new LoginPOM();

    @Given("^Navigate to website$")
    public void navigate_to_website()  {
        driver = Driver.getDriver();
        driver.get("D:\\HelloScrumProject\\UI\\Login.html");
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
        Assert.assertTrue(alert_message.contains("Invalid"));

    }

    @When("^Enter valid \"([^\"]*)\" and \"([^\"]*)\"$")
    public void enter_valid_and(String userName, String password)  {
        loginPOM.user_input.sendKeys(userName);
        loginPOM.password_input.sendKeys(password);
        loginPOM.login_button.click();
    }

    @Then("^User should login successfully and redirected to appropriate page$")
    public void user_should_login_successfully_and_redirected_to_appropriate_page()  {

        String alert_message = driver.switchTo().alert().getText();
        Assert.assertTrue(alert_message.contains("Invalid"));
    }


    @When("^Enter valid \"([^\"]*)\" and invalid \"([^\"]*)\"$")
    public void enterValidAndInvalid(String userName, String password)  {

        loginPOM.user_input.sendKeys(userName);
        loginPOM.user_input.sendKeys(password);
        loginPOM.login_button.click();
    }

    @When("^Enter invalid \"([^\"]*)\" and Valid \"([^\"]*)\"$")
    public void enterInvalidAndValid(String userName, String password)  {

        loginPOM.user_input.sendKeys(userName);
        loginPOM.user_input.sendKeys(password);
        loginPOM.login_button.click();
    }

    @When("^Enter empty \"([^\"]*)\" and empty \"([^\"]*)\"$")
    public void enterEmptyAndEmpty(String userName, String password)  {

        loginPOM.user_input.sendKeys(userName);
        loginPOM.user_input.sendKeys(password);
        loginPOM.login_button.click();
    }
}
