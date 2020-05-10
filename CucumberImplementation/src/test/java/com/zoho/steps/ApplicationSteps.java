package com.zoho.steps;

import com.zoho.web.WebConnector;

import cucumber.api.java.en.Then;

public class ApplicationSteps {
	WebConnector con;
	
	public ApplicationSteps(WebConnector con) {
		System.out.println("Inside ApplicationSteps");
		this.con=con;
		
		
	}
	
	
	@Then("^login should be ([a-zA-Z]{1,})$")
	public void validateLogin(String expResult) {
		con.validateLogin(expResult);
		System.out.println("login should be "+expResult);
	}
	
	
}
