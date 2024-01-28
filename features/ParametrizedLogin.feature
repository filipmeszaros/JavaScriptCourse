Feature: Login Functionality - Parametrized
    As a user
    I want to be able to log in to my account
    I want invalid passwords to not allow me to log in, even when part of email or part of password is correct

    @LongRunning
    Scenario Outline: Invalid Login test - brute force
        Given I am on the login page
        When I enter credentials with username "<username>" and password "<password>"
        And I click on the login button
        Then I should see a login error message

    Examples:
    | username              | password      |
    | anshika@gmail.com     | Iamking@000!  |
    | anshika@gmail.com     | Iamking@      |
    | anshika@seznam.cz     | Iamking@000   |