package StepDefinitions;

import Utilities.Driver;
import cucumber.api.java.en.*;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;

public class TitlePageSteps {

    WebDriver driver;


    @When("^Title of Login page is not empty$")
    public void title_of_Login_page_is_not_empty()  {
        driver = Driver.getDriver();
        Assert.assertFalse(driver.getTitle().isEmpty());

    }

    @Then("^Title of Login page contains \"([^\"]*)\"$")
    public void title_of_Login_page_contains(String arg1)  {

        Assert.assertTrue(driver.getTitle().contains("Techno Bank"));

    }

}
