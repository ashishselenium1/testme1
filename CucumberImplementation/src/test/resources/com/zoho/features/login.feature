@Login
Feature: Login to Zoho
  I want to use this to Login

  @Login
  Scenario Outline: Login to Zoho
    Given the runmode is <runmode> 
    And open browser <browser>
    And navigate to url
    Then title should be home_page_title
    When I click on login_link_xpath
    And I type username_field_id as <username>
    And I click on login_button_css
    Then element password_field_id should be present
    When I type password_field_id as <password>
		And I click on login_button_css
		Then login should be <result>
	Examples:
	 |  runmode   | browser | username                      | password     | result  |
	 |     Y      | chrome  | se.leniumtraining10@gmail.com | Whizdom@2020 | success |
	 |     N      | mozilla | se.len.iumtraining10@gmail.com| Whizdom@2020 | failure |