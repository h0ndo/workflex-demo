Feature: Workstation sorting
  As a user
  I want to sort workstation columns
  So that the backend returns ordered data

  Scenario Outline: Request ascending sort for each column
    Given the workstation page is open
    When I sort by "<header>"
    Then the workstation request should contain sort "<sortParam>"

    Examples:
      | header       | sortParam         |
      | Employee     | employee,asc      |
      | Origin       | originCountry,asc |
      | Destination  | destinationCountry,asc |
      | Start        | startDate,asc     |
      | End          | endDate,asc       |
      | Working days | officeDays,asc    |
      | Risk         | risk,asc          |

  Scenario: Toggle Working days sort direction
    Given the workstation page is open
    When I sort by "Working days"
    Then the workstation request should contain sort "officeDays,asc"
    When I sort by "Working days"
    Then the workstation request should contain sort "officeDays,desc"
