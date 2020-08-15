package StepDefinitions;

import POM.HomePagePOM;
import POM.LoginPOM;
import Utilities.Driver;
import cucumber.api.java.en.*;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;

public class TitlePageSteps {

    WebDriver driver;
    LoginPOM loginPOM = new LoginPOM();


    @When("^Title of Login page is not empty$")
    public void title_of_Login_page_is_not_empty() {
        driver = Driver.getDriver();
        Assert.assertFalse(driver.getTitle().isEmpty());

    }

    @Then("^Title of Login page contains \"([^\"]*)\"$")
    public void title_of_Login_page_contains(String arg1) {

        Assert.assertTrue(driver.getTitle().contains("Techno Bank"));

    }

    @Given("^Validate presence of Labels, Textboxes and login button$")
    public void validate_presence_of_Labels_Textboxes_and_login_button() {

        Assert.assertNotNull(loginPOM.userName_label);
        Assert.assertNotNull(loginPOM.password_label);
        Assert.assertNotNull(loginPOM.user_input);
        Assert.assertNotNull(loginPOM.password_input);
        Assert.assertNotNull(loginPOM.login_button);
    }

    @Given("^Verify Placeholder contains Label name$")
    public void verify_Placeholder_contains_Label_name() {

        String user_placeholder = loginPOM.user_input.getAttribute("placeholder");
        Assert.assertEquals(user_placeholder, "Enter Username");
        String password_placeholder = loginPOM.password_input.getAttribute("placeholder");
        Assert.assertEquals(password_placeholder, "Enter Password");
    }

}
