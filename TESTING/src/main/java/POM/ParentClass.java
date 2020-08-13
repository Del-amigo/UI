package POM;

import Utilities.Driver;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

public class ParentClass {

    WebDriverWait wait;
    WebDriver driver;

    public ParentClass() {
        driver = Driver.getDriver();
        wait = new WebDriverWait(driver,10);
    }
}
