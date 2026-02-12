#Test Scenarios for E-commerce Website

##TS-01: User Registration Form

###Test Conditions:
* **TC-01.1** User registers with valid data
* **TC-01.2** User submits form with all required fields empty
* **TC-01.3** User registers with already existing email
* **TC-01.4** User enters invalid characters (special symbols, emojis, spaces)
* **TC-01.5** User enters invalid email format
* **TC-01.6** Password does not meet security requirements
* **TC-01.7** Password and Confirm Password do not match
* **TC-01.8** Backend/API error during registration
* **TC-01.9** Database connection failure during registration
 
 
##TS-02: User Authorization (Login)

###Test Conditions:
* **TC-02.1** User logs in with valid credentials
* **TC-02.2** User submits empty login form
* **TC-02.3** User logs in with incorrect password
* **TC-02.4** User logs in with non-existing account
* **TC-02.5** User enters invalid characters
* **TC-02.6** User is redirected to correct page after login
* **TC-02.7** Backend/API error during login
* **TC-02.8** Database connection failure during login
* **TC-02.9** Account is blocked / inactive


##TS-03: Forgot Password

###Test Conditions:
* **TC-03.1** User submits valid registered email
* **TC-03.2** User submits empty email field
* **TC-03.3** User submits invalid email format
* **TC-03.4** User submits non-existing email
* **TC-03.5** Password reset email is successfully sent
* **TC-03.6** Reset link is expired
* **TC-03.7** Backend/API error during password recovery


##TS-04: Product Catalog & Categories

###Test Conditions:
* **TC-04.1** All categories are displayed correctly
* **TC-04.2** Category page opens with relevant products
* **TC-04.3** Switching between categories works correctly
* **TC-04.4** Products belong to correct category
* **TC-04.5** Empty category is handled correctly
* **TC-04.6** Pagination works correctly
* **TC-04.7** Products load correctly after page refresh


##TS-05: Menu & Navigation

###Test Conditions:

* **TC-05.1** Main menu items are displayed correctly
* **TC-05.2** Navigation links redirect to correct pages
* **TC-05.3** User can switch between menu and categories
* **TC-05.4** Breadcrumbs display correct navigation path
* **TC-05.5** Menu works correctly on mobile devices
* **TC-05.6** Menu state is preserved after page refresh


## TS-06: Search Functionality

### Test Conditions:

* **TC-06.1** Search using a single character
* **TC-06.2** Search using multiple characters
* **TC-06.3** Search using leading/trailing spaces
* **TC-06.4** Search using special characters
* **TC-06.5** Search is case-insensitive
* **TC-06.6** Search returns relevant results
* **TC-06.7** No results message is displayed for invalid search
* **TC-06.8** Search request does not modify database (read-only operation)
* **TC-06.9** Backend/API error during search request


## TS-07: Filters Functionality

### Test Conditions:

* **TC-07.1** Filters can be applied individually
* **TC-07.2** Multiple filters can be applied simultaneously
* **TC-07.3** Filtered results match selected criteria
* **TC-07.4** Filters can be cleared/reset
* **TC-07.5** Filters persist after page refresh
* **TC-07.6** No results message is displayed if no products match filters


## TS-08: Sorting Functionality

### Test Conditions:

* **TC-08.1** Sort by price (low to high)
* **TC-08.2** Sort by price (high to low)
* **TC-08.3** Sort by newest
* **TC-08.4** Sort by popularity
* **TC-08.5** Sorting works correctly with applied filters
* **TC-08.6** Sorting persists after page refresh


## TS-09: Product Details Page

### Test Conditions:

* **TC-09.1** Product images are displayed correctly
* **TC-09.2** Product name, description, and price are displayed correctly
* **TC-09.3** Product price matches catalog price
* **TC-09.4** Product availability (in stock / out of stock) is displayed
* **TC-09.5** User can select available size
* **TC-09.6** User can select available color
* **TC-09.7** Unavailable size/color cannot be selected
* **TC-09.8** Header elements (menu, search, wishlist, cart) are displayed correctly
* **TC-09.9** Add to cart button is enabled only for valid selections


## TS-10: Wishlist Management

### Test Conditions:

* **TC-10.1** User adds product to wishlist
* **TC-10.2** User removes product from wishlist
* **TC-10.3** Wishlist is saved for logged-in user
* **TC-10.4** Wishlist persists after logout/login
* **TC-10.5** Wishlist is synchronized across devices
* **TC-10.6** Wishlist is not available for guest users (if applicable)


## TS-11: Shopping Cart Management

### Test Conditions:

* **TC-11.1** User adds product to cart
* **TC-11.2** User removes product from cart with confirmation message
* **TC-11.3** User updates product quantity
* **TC-11.4** Cart total price is recalculated correctly
* **TC-11.5** Cart reflects correct number of items
* **TC-11.6** Cart persists after page refresh
* **TC-11.7** Cart persists after logout/login


## TS-12: Checkout Flow

### Test Conditions:

* **TC-12.1** User successfully fills checkout form and moves to next step
* **TC-12.2** Checkout data is pre-filled for registered users
* **TC-12.3** Checkout form is empty for guest users
* **TC-12.4** User edits cart during checkout
* **TC-12.5** Discount / promo code is applied correctly
* **TC-12.6** Validation errors are displayed for empty required fields
* **TC-12.7** Validation errors are displayed for invalid input
* **TC-12.8** User cannot proceed with invalid checkout data
* **TC-12.9** Checkout session is preserved after logout/login
* **TC-12.10** Checkout session expires after inactivity timeout


## TS-13: Payment Processing

### Test Conditions:

* **TC-13.1** User successfully completes payment
* **TC-13.2** Saved payment method is available for registered user
* **TC-13.3** Invalid delivery date blocks payment step
* **TC-13.4** Payment supports multiple platforms/devices
* **TC-13.5** Error message is displayed when internet connection is lost
* **TC-13.6** Payment failure is handled correctly
* **TC-13.7** Transaction timeout is handled correctly
* **TC-13.8** Payment success message is displayed
* **TC-13.9** Payment confirmation email is sent


## TS-14: Order Confirmation

### Test Conditions:

* **TC-14.1** User is redirected to order confirmation page after successful checkout
* **TC-14.2** Order summary is displayed correctly
* **TC-14.3** Customer and delivery information is displayed correctly
* **TC-14.4** User can edit order within allowed time window
* **TC-14.5** Order confirmation email is sent
* **TC-14.6** Order ID is generated and displayed


## TS-15: User Profile Management

### Test Conditions:

* **TC-15.1** User profile menu items open correct pages
* **TC-15.2** Email field accepts only valid email format
* **TC-15.3** Profile fields accept correct data types
* **TC-15.4** User can update profile information
* **TC-15.5** User can change password
* **TC-15.6** Password change confirmation email is sent
* **TC-15.7** User is logged out after password change
