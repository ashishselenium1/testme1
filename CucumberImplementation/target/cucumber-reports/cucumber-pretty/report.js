$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/com/zoho/features/lead.feature");
formatter.feature({
  "name": "Create and Delete Leads",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Lead"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the runmode is Y",
  "keyword": "Given "
});
formatter.match({
  "location": "GenericSteps.checkRunmode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "open browser chrome",
  "keyword": "And "
});
formatter.match({
  "location": "GenericSteps.openBrowser(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigate to url",
  "keyword": "And "
});
formatter.match({
  "location": "GenericSteps.navigate(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "title should be home_page_title",
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.validateTitle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login_link_xpath",
  "keyword": "When "
});
formatter.match({
  "location": "GenericSteps.click(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type username_field_id as se.leniumtraining10@gmail.com",
  "keyword": "And "
});
formatter.match({
  "location": "GenericSteps.type(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login_button_css",
  "keyword": "And "
});
formatter.match({
  "location": "GenericSteps.click(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "element password_field_id should be present",
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.validateElementPresent(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type password_field_id as Whizdom@2020",
  "keyword": "When "
});
formatter.match({
  "location": "GenericSteps.type(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login_button_css",
  "keyword": "And "
});
formatter.match({
  "location": "GenericSteps.click(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on crm_xpath",
  "keyword": "And "
});
formatter.match({
  "location": "GenericSteps.click(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Creation of Lead",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Lead"
    },
    {
      "name": "@CreateLead"
    }
  ]
});
formatter.step({
  "name": "I click on leads_xpath",
  "keyword": "And "
});
formatter.match({
  "location": "GenericSteps.click(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on create_lead_id",
  "keyword": "And "
});
formatter.match({
  "location": "GenericSteps.click(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on submenu_leads_xpath",
  "keyword": "And "
});
formatter.match({
  "location": "GenericSteps.click(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type company_id as Microsoft",
  "keyword": "And "
});
formatter.match({
  "location": "GenericSteps.type(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type lead_lastname_id as Gates",
  "keyword": "And "
});
formatter.match({
  "location": "GenericSteps.type(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on lead_save_id",
  "keyword": "And "
});
formatter.match({
  "location": "GenericSteps.click(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on back_icon_xpath",
  "keyword": "And "
});
formatter.match({
  "location": "GenericSteps.click(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "lead with name Gates should be generated",
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.validateLeadCreation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/com/zoho/features/login.feature");
formatter.feature({
  "name": "Login to Zoho",
  "description": "  I want to use this to Login",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Login to Zoho",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "the runmode is \u003crunmode\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "open browser \u003cbrowser\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "navigate to url",
  "keyword": "And "
});
formatter.step({
  "name": "title should be home_page_title",
  "keyword": "Then "
});
formatter.step({
  "name": "I click on login_link_xpath",
  "keyword": "When "
});
formatter.step({
  "name": "I type username_field_id as \u003cusername\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I click on login_button_css",
  "keyword": "And "
});
formatter.step({
  "name": "element password_field_id should be present",
  "keyword": "Then "
});
formatter.step({
  "name": "I type password_field_id as \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "I click on login_button_css",
  "keyword": "And "
});
formatter.step({
  "name": "login should be \u003cresult\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "runmode",
        "browser",
        "username",
        "password",
        "result"
      ]
    },
    {
      "cells": [
        "Y",
        "chrome",
        "se.leniumtraining10@gmail.com",
        "Whizdom@2020",
        "success"
      ]
    },
    {
      "cells": [
        "N",
        "mozilla",
        "se.len.iumtraining10@gmail.com",
        "Whizdom@2020",
        "failure"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login to Zoho",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the runmode is Y",
  "keyword": "Given "
});
formatter.match({
  "location": "GenericSteps.checkRunmode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "open browser chrome",
  "keyword": "And "
});
formatter.match({
  "location": "GenericSteps.openBrowser(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigate to url",
  "keyword": "And "
});
formatter.match({
  "location": "GenericSteps.navigate(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "title should be home_page_title",
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.validateTitle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login_link_xpath",
  "keyword": "When "
});
formatter.match({
  "location": "GenericSteps.click(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type username_field_id as se.leniumtraining10@gmail.com",
  "keyword": "And "
});
formatter.match({
  "location": "GenericSteps.type(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login_button_css",
  "keyword": "And "
});
formatter.match({
  "location": "GenericSteps.click(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "element password_field_id should be present",
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.validateElementPresent(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type password_field_id as Whizdom@2020",
  "keyword": "When "
});
formatter.match({
  "location": "GenericSteps.type(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login_button_css",
  "keyword": "And "
});
formatter.match({
  "location": "GenericSteps.click(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "login should be success",
  "keyword": "Then "
});
formatter.match({
  "location": "ApplicationSteps.validateLogin(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login to Zoho",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the runmode is N",
  "keyword": "Given "
});
formatter.match({
  "location": "GenericSteps.checkRunmode(String)"
});
formatter.result({
  "error_message": "org.testng.SkipException: Runmode is N\r\n\tat com.zoho.web.UtilityConnector.skipScenario(UtilityConnector.java:111)\r\n\tat com.zoho.steps.GenericSteps.checkRunmode(GenericSteps.java:46)\r\n\tat ✽.the runmode is N(src/test/resources/com/zoho/features/login.feature:7)\r\n",
  "status": "skipped"
});
formatter.step({
  "name": "open browser mozilla",
  "keyword": "And "
});
formatter.match({
  "location": "GenericSteps.openBrowser(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "navigate to url",
  "keyword": "And "
});
formatter.match({
  "location": "GenericSteps.navigate(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "title should be home_page_title",
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.validateTitle(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on login_link_xpath",
  "keyword": "When "
});
formatter.match({
  "location": "GenericSteps.click(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I type username_field_id as se.len.iumtraining10@gmail.com",
  "keyword": "And "
});
formatter.match({
  "location": "GenericSteps.type(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on login_button_css",
  "keyword": "And "
});
formatter.match({
  "location": "GenericSteps.click(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "element password_field_id should be present",
  "keyword": "Then "
});
formatter.match({
  "location": "ValidationSteps.validateElementPresent(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I type password_field_id as Whizdom@2020",
  "keyword": "When "
});
formatter.match({
  "location": "GenericSteps.type(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on login_button_css",
  "keyword": "And "
});
formatter.match({
  "location": "GenericSteps.click(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "login should be failure",
  "keyword": "Then "
});
formatter.match({
  "location": "ApplicationSteps.validateLogin(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});