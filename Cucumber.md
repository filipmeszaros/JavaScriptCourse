# Cucumber framework (for Behaviour-Driven Development)
Cucumber is a tool for running automated tests written in plain language. Because they're written in plain language (Gherkin language), they can be read by anyone on your team. Because they can be read by anyone, you can use them to help improve communication, collaboration and trust on your team.  
Example of how Cucumber can be used is found in folders:   
* [features](features/) - contains feature files
* [features/step_definitions](features/step_definitions/) - contains step definitions
* [features/hooks](features/hooks/) - contains hooks used for setup and teardowns for tests

Documentation: [Cucumber github](https://github.com/cucumber/cucumber-js)

## Feature file
Allows you to describe test in plan language, and change attributes of different tests. One feature file can contain multiple testing scenarios, and it represents business requirement of your application. Feature files are written in `Gherkin` language.  
Feature files are located in root directory of repository in folder [features](features/).  
Feature file contains scenarios which represents test cases for each feature. Scenarios  can contain these step definitions:
1. `Given` - what you need to have to perform an action
2. `When` - performs an action
3. `Then` - desired outcome of action (contains expects)
Feature files can be executed with command `npx cucumber-js`.  
Feature files are run in sequential mode always. Only thing that can be executed in parallel are test scenarios within feature file.

```
Feature: Greeting

  Scenario: Say hello
    When the greeter says hello
    Then I should have heard "hello"
``` 

## Steps file
Steps file represents implementation of lines of feature file. For example, **When the greeter says hello** can be one method, **Then I should have heard "hello"** can be another method.  
Steps file are located in folder [features/step_definitions](features/step_definitions/).   
Steps file can be automatically generated from Feature file. If you try to execute feature files (via command `npx cucumber-js`) and some steps does not exist, they will be printed to a console output and you can use it for implementation.
 

## Execute cucumber tests
To execute cucumber tests, you can use command:  
* `npx cucumber-js --exit` - to execute all tests and close browsers after tests
* `npx cucumber-js features/Login.feature --exit` - execute one Feature file
* `npx cucumber-js --tags "@Smoke" --exit` - to execute all Scenarios tagged with @Smoke tag
* `npx cucumber-js --parallel 2 --exit` - execute all feature files, 2 scenarios in parallel at one time within one feature file (feature files cannot be run in parallel with Cucumber)
* `npx cucumber-js --exit --format html:cucumber-report.html` - execute tests and generate report with test results
* `npx cucumber-js --exit --retry 1` - execute tests and retry failed tests once
