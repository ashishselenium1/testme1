package com.zoho.web;

import java.io.File;
import java.io.IOException;
import java.util.Date;
import java.util.Properties;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.SkipException;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.Status;
import com.zoho.web.reports.ExtentManager;


public class UtilityConnector {
	WebDriver driver;
	Properties prop;
	ExtentTest test;
	ExtentReports report;
	
	// webelement
	// centralized function - find the element
	public WebElement getElement(String objectKey) {
		WebElement e = null;
		// checking presence
		if(isElementPresent(objectKey)) {
			e=driver.findElement(getLocator(objectKey));
		}else {
			failScenario("Unable to extract the object "+ objectKey);
			
			
		}
		return e;
	}
	// true - present
	// false - not present
	public boolean isElementPresent(String objectKey) {
		WebDriverWait wait = new WebDriverWait(driver, 10);
		By locator = getLocator(objectKey);
		try {
			wait.until(ExpectedConditions.presenceOfElementLocated(locator));// presence
			wait.until(ExpectedConditions.visibilityOfElementLocated(locator));// visibility
			wait.until(ExpectedConditions.elementToBeClickable(locator));// clickability
		}catch(TimeoutException e) {
			return false;
		}
		
		return true;
	}
	// find the locator based on xpath,id, name,css
	public By getLocator(String objectKey) {
		By locator = null;
		if(objectKey.endsWith("_xpath"))
			locator = By.xpath(prop.getProperty(objectKey));
		else if(objectKey.endsWith("_id"))
			locator = By.id(prop.getProperty(objectKey));
		else if(objectKey.endsWith("_css"))
			locator = By.cssSelector(prop.getProperty(objectKey));
		else if(objectKey.endsWith("_name"))
			locator = By.name(prop.getProperty(objectKey));
		
		return locator;
	}
	
	public boolean verifyTitle(String expTitleKey) {
		if(prop.getProperty(expTitleKey).equals(driver.getTitle()))
			return true;
		else
			return false;
		
	}
	/***********************Reporting Functions*****************************/
	public void initReports(String scenarioName) {
        report = ExtentManager.getReporter(System.getProperty("user.dir")+"//reports//");
		test = report.createTest(scenarioName);
	}
	public void quit() {
		if(report!=null)
		report.flush();
		
		//if(driver!=null)
		//	driver.quit();
	}
	
	public void log(String msg) {
		test.log(Status.INFO, msg);
	}
	// fail the scenario
	public void failScenario(String failureMsg) {
		// fail in extent reports
		test.log(Status.FAIL, failureMsg);
		// take the screenshot of failure and put in reports
		takeScreenShot();
		//fail in cucumber
		Assert.fail(failureMsg);
	}
	// skip scenario
	public void skipScenario(String msg) {
		test.log(Status.SKIP, msg);
		throw new SkipException(msg);
	}
	public void takeScreenShot(){
		// fileName of the screenshot
		Date d=new Date();
		String screenshotFile=d.toString().replace(":", "_").replace(" ", "_")+".png";
		// take screenshot
		File srcFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
		try {
			// get the dynamic folder name
			FileUtils.copyFile(srcFile, new File(ExtentManager.screenshotFolderPath+screenshotFile));
			//put screenshot file in reports
			test.log(Status.INFO,"Screenshot-> "+ test.addScreenCaptureFromPath(ExtentManager.screenshotFolderPath+screenshotFile));
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

}
