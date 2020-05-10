package com.zoho.web;

import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class GenericConnector extends UtilityConnector{
	
	

	public void openBrowser(String browserName) {
		log("**WebConnector openBrowser** "+browserName);
		System.setProperty("webdriver.gecko.driver", "D:\\Ashish\\softwares\\drivers\\geckodriver.exe");
		if(browserName.equals("chrome"))
			driver = new ChromeDriver();
		else if(browserName.equals("mozilla"))
			driver = new FirefoxDriver();
		
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
	}
	
	public void navigate(String url) {
		log("**WebConnector navigate** "+prop.getProperty(url));
		driver.get(prop.getProperty(url));
	}
	
	public void click(String objectKey) {
		log("**WebConnector click** "+prop.getProperty(objectKey));
		getElement(objectKey).click();
		
	}
	
	public void type(String objectKey,String data) {
		log("**WebConnector type** "+prop.getProperty(objectKey)+","+data);
		getElement(objectKey).sendKeys(data);
	}
	
	public String getText(String objectKey ) {
		log("**WebConnector getText** "+prop.getProperty(objectKey));
		return getElement(objectKey).getText();
	}

	
	
}
