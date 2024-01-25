# Page Object Model (POM)


Page Object Model, also known as POM, is a design pattern that creates an object repository for storing all web elements. It helps reduce code duplication and improves test case maintenance.
In Page Object Model, consider each web page of an application as a class file. Each class file will contain only corresponding web page elements. Using these elements, testers can perform operations on the website under test.

## Main categories in POM
### Pages
Every page in your UI application is mapped to sepatate class in separate file.  
This class contains methods to access the page and to perform operations on that page.  
Example:  
Login page is one LoginPage class, with `login()`, `resetPassword()` methods, etc.  
Home page is one HomePage class with `filterUsers()`, `accessOptions()` methods, etc.

### Tests
Every test in your repository uses page objects directly to test something.

## Page object manager
Concept in POM which allows you to manage all page objects, and it acts as a library of all page objects. 