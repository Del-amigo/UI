package POM;

import Utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPOM extends ParentClass{

    WebElement myElement;

    public LoginPOM() {
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(css = "input[id='username']")
    public WebElement user_input;

    @FindBy(css = "input[id='password']")
    public WebElement password_input;

    @FindBy(css = "input[name='submit']")
    public WebElement login_button;

}
