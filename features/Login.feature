Feature: Login Functionality
    As a user
    I want to be able to log in to my account with correct password

    @Smoke
    Scenario: Valid Login
        Given I am on the login page
        When I enter credentials with username "anshika@gmail.com" and password "Iamking@000"
        And I click on the login button
        Then I should be logged in to my account and homepage should be visible

    @Smoke
    Scenario: Invalid Login
        Given I am on the login page
        When I enter credentials with username "anshika@gmail.com" and password "invalid password"
        And I click on the login button
        Then I should see a login error message

    #Scenario: Admin Login
    #    Given I am on the login page
    #    When I enter credentials with username "admin" and password "admin password"
    #    And I click on the login button
    #    Then I should be logged in to my account and homepage should be visible
    #    And Admin panel should be shown