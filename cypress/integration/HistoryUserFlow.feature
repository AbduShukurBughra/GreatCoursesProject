Feature: The Great Courses User Flow - History
          Background:
                    Given I visit The Great Courses Home Page
          Scenario: Complete user flow for a History book not on sale
                    When I click on the Browse button
                    And I click on the History category
                    Then I locate a book not on sale
                    And I click on the not on sale book
                    And I click on the Instant Video option
                    And I click on the Add to Cart button
                    Then I validate the text "Instant video added to your cart" appears on the page
                    And I click on the View Cart button
                    Then I validate the book is in the cart by its name
                    And I click on the Checkout Now button
                    When I enter a fake email address and fake password
                    And I click on the Continue button
                    Then I validate the error message "We can not find an account with that email address" appears
                    Given I navigate back to the previous page
                    When I click on the Remove button to remove the book from the cart
                    And I move the mouse to the Cart icon in the top right corner
                    Then I validate the text "Your Cart is Empty" appears right under the Cart icon