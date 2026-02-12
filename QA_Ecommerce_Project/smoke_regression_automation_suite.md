# SMOKE REGRESSION AUTOMATION SUITE

## 1. Purpose

The purpose of the Smoke Regression Automation Suite is to validate critical business flows of the e-commerce platform after each deployment.

Smoke tests ensure that the application is stable enough for further testing and release.

Execution:
* After each deployment to staging
* Before production release
* Triggered automatically via CI/CD pipeline

Automation Level: 100%


## 2. Entry Criteria

* New build deployed to staging
* Environment available
* Test data prepared
* No blocking environment issues

## 3. Exit Criteria

* 100% smoke tests passed
* No Critical or High severity defects
* Build approved for further testing or release

## 4. Automated Smoke Test Cases

### SR-01: Successful Login
Objective: Verify that registered user can log in.
Steps:
1. Open login page
2. Enter valid credentials
3. Click "Login"

Expected Result:
- User is redirected to account/home page
- Session is created
- No error messages displayed

### SR-02: Open Product Category
Objective: Verify main catalog availability.
Steps:
1. Open main category page
2. Verify products list is displayed

Expected Result:
- Products load successfully
- No UI errors
- Pagination visible (if applicable)

### SR-03: Open Product Details Page
Objective: Verify product page functionality.
Steps:
1. Open product from category
2. Verify product information

Expected Result:
- Product name, image, and price displayed
- Add to Cart button available

### SR-04: Add Product to Cart
Objective: Verify cart functionality.
Steps:
1. Select available size/color
2. Click "Add to Cart"

Expected Result:
- Product added to cart
- Cart counter updated
- Correct product displayed in cart

### SR-05: Update Cart Quantity
Objective: Verify cart recalculation logic.
Steps:
1. Open cart
2. Increase product quantity

Expected Result:
- Quantity updated
- Total price recalculated correctly

### SR-06: Complete Checkout
Objective: Verify checkout happy path.
Steps:
1. Proceed to checkout
2. Fill required shipping fields
3. Select delivery option
4. Select payment method (sandbox/mock)
5. Confirm order

Expected Result:
- Checkout completed successfully
- User redirected to confirmation page

### SR-07: Order Confirmation
Objective: Verify order completion.
Steps:
1. Validate confirmation page

Expected Result:
- Success message displayed
- Order number generated
- Confirmation email triggered (API check if applicable)


## 5. CI/CD Integration

Smoke suite is executed automatically:
* On each merge to main branch
* On release candidate build
* Results available in test report dashboard

Failed smoke tests block deployment.
