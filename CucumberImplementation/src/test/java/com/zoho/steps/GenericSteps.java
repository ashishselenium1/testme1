package com.zoho.steps;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.SkipException;

import com.zoho.web.WebConnector;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class GenericSteps {
	WebConnector con;
	
	public GenericSteps(WebConnector con) {
		System.out.println("Inside GenericSteps");
		this.con=con;
		
	}
	
	@Before // init the reports
	public void init(Scenario scenario) {
		System.out.println("---------------Before scenario--------"+scenario.getName()+"---------");
		con.initReports(scenario.getName());
		
		
	}
	
	
	@After // finalize the rep
	public void after(Scenario scenario) {
		System.out.println("---------------After scenario--------"+scenario.getName()+"---------");
		con.quit();
	}
	  
	@Given("^the runmode is ([a-zA-Z]{1,})$")
		public void checkRunmode(String runmode) {
			con.log("Runmode "+ runmode);
			if(runmode.equals("N"))// skip
				con.skipScenario("Runmode is N");
	}
	
	@Given("^open browser ([a-zA-Z]{1,})$")
	public void openBrowser(String browserType) {
		con.log("Opening the browser "+ browserType);
		System.out.println("open browser "+browserType);
		con.openBrowser(browserType);
		
	}
	
	@And("^navigate to ([^\"]*)$")
	public void navigate(String url) {
		System.out.println("navigate to "+url);
		con.navigate(url);
	}
	
	@When("^I type ([^\"]*) as ([^\"]*)$")
	public void type(String object,String value) {
		System.out.println("I type "+object+" as "+value+"");
		con.type(object, value);
	}
	
	@When("^I click on ([^\"]*)$")
	public void click(String object) {
		System.out.println("I click on "+object);
		con.click(object);
	}
	
	
}
