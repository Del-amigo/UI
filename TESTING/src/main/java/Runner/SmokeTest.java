package Runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(

        tags = {"@SmokeTest"},
        features={"src/test/java/FeatureFiles"}, //the location of feature files.
        glue={"StepDefinitions"}, // location of the step definition
        dryRun = false

)

public class SmokeTest extends AbstractTestNGCucumberTests {
}
