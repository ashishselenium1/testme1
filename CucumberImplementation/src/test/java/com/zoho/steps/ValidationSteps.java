package com.zoho.steps;

import com.zoho.web.WebConnector;

import cucumber.api.java.en.Then;

public class ValidationSteps {
	WebConnector con;
	
	public ValidationSteps(WebConnector con) {
		System.out.println("Inside ValidationSteps");
		this.con=con;
		
	}
	
	
	@Then("^element ([^\"]*) should be present$")
	public void validateElementPresent(String objectKey) {
		if(!con.isElementPresent(objectKey)) {
			// report the error
		}
	}
	
	@Then("^title should be ([^\"]*)$")
	public void validateTitle(String expectedTitleKey) {
		if(!con.verifyTitle(expectedTitleKey)){
			// report the error
		}
	}
	
	@Then("^lead with name ([^\"]*) should be generated$")
	public void validateLeadCreation(String leadNameExpected) {
		String leadNameActual = con.getText("lead_name_xpath");
		if(!leadNameExpected.equals(leadNameActual))
			con.failScenario("Could not create lead "+ leadNameExpected);
	}
	
	
	
	
	
}
