package com.zoho.web;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class WebConnector extends ValidationConnector{
	WebDriver driver;

	public WebConnector() {
		System.out.println("*************WebConnector*************");
		// init the properties file
		
		try {
			prop = new Properties();
			FileInputStream fs = new FileInputStream(System.getProperty("user.dir")+"\\src\\test\\resources\\project.properties");
			prop.load(fs);
		} catch (Exception e) {
			e.printStackTrace();
		}
	
	}
	
	
	
	
	
	
}
