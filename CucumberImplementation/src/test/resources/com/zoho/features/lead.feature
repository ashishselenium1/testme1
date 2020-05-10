
@Lead
Feature: Create and Delete Leads
 
  Background:
    Given the runmode is Y
    And open browser chrome
    And navigate to url
    Then title should be home_page_title
    When I click on login_link_xpath
    And I type username_field_id as se.leniumtraining10@gmail.com
    And I click on login_button_css
    Then element password_field_id should be present
    When I type password_field_id as Whizdom@2020
		And I click on login_button_css
		And I click on crm_xpath

  @CreateLead
  Scenario: Creation of Lead
    And I click on leads_xpath
    And I click on create_lead_id
    And I click on submenu_leads_xpath
    And I type company_id as Microsoft
    And I type lead_lastname_id as Gates
    And I click on lead_save_id
    And I click on back_icon_xpath
    Then lead with name Gates should be generated
