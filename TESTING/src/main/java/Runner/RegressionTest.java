package Runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(

        tags = {"@RegressionTest"},
        features={"src/test/java/FeatureFiles"}, //the location of feature files.
        glue={"StepDefinition"}, // location of the step definition
        dryRun = false

)
public class RegressionTest extends AbstractTestNGCucumberTests {
}
