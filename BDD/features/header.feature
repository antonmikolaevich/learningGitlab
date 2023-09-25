@header
Feature: Header

  @1
  Scenario: Page should have 'EPAM | Software Engineering & Product Development Services' title
    Given I open 'first' page
    Then Page title should "be equal to" 'EPAM | Software Engineering & Product Development Services'

  @2
  Scenario Outline: Check search option
    Given I open 'first' page
    When I click 'search' icon
    And I type <Text> value in 'inputSearch' field
    And I click 'findBtn' button

    Examples:
    | Text       |
    | JavaScript |
    | DevOps     |
    | Java       |
