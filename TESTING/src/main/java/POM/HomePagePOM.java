package POM;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class HomePagePOM extends ParentClass{

    WebElement myElement;

    @FindBy(css = "p[class='fa fa-user']")
    public WebElement userName_label;

    @FindBy(xpath = "//p[@class='fa fa-lock']")
    public WebElement password_label;


}
