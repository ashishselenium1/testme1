package com.zoho.runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;
// reports
// completing login scenario
// parameterizing
// other scenarios

@CucumberOptions(
        features = "src/test/resources/",//feature file
        glue = {"com.zoho.steps"},//step defintion java file
        strict=false,
        monochrome=true,
        tags = {"@Login,@CreateLead"}, // order is not maintained
        plugin = {
              
                "html:target/cucumber-reports/cucumber-pretty",
                "json:target/cucumber-reports/CucumberTestReport.json",
                "rerun:target/cucumber-reports/rerun.txt"
        })
public class CucumberProjectTestngRunnerTest extends AbstractTestNGCucumberTests{
   
}