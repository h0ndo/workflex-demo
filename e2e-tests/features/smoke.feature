Feature: App availability
  As a user
  I want to open the app
  So that I can start using Workflex

  Scenario: Open landing page
    Given the application is running
    When I open the root page
    Then I should see the running app message
