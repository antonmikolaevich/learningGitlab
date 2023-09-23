Feature: Header

  Scenario: Page should have 'EPAM | Software Engineering & Product Development Services' title
    Given I open 'first' page
    Then Page title should "be equal to" 'EPAM | Software Engineering & Product Development Services'

