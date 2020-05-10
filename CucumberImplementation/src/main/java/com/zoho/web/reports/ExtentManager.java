package com.zoho.web.reports;

import java.io.File;
import java.util.Date;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.reporter.ExtentSparkReporter;
import com.aventstack.extentreports.reporter.configuration.Theme;

public class ExtentManager {
	
	public static ExtentReports rep;
	public static String screenshotFolderPath;
	public static ExtentReports getReporter(String path) {
		if(rep==null) {
			
			rep = new ExtentReports();
			// create the folders
			Date d = new Date();
			System.out.println(d.toString().replaceAll(":","-"));
			String folder=d.toString().replaceAll(":","-");
			String pathToReports=path+folder;
			path=path+folder+"\\screenshots\\";
			screenshotFolderPath=path;
			File f = new File(path);
			f.mkdirs();
			
			// reports config
			ExtentSparkReporter  sparkReporter = new ExtentSparkReporter(pathToReports);
			sparkReporter.config().setReportName("Zoho Automation Testing Report");
			sparkReporter.config().setDocumentTitle("Zoho Testing");
			sparkReporter.config().setTheme(Theme.DARK);
			sparkReporter.config().setEncoding("utf-8");
			
			// atttaching reporter
			rep.attachReporter(sparkReporter);
			
		}
		
		return rep;
	}

}
