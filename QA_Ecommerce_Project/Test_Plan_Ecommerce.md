# TEST PLAN

## E-commerce Website (Women’s Clothing Store)
*Confluence page*
*Author: QA Lead*
*Version: 1.0*
*Project type: Web (Desktop + Mobile)*

## 1. Purpose of the Test Plan

This document describes the **testing strategy, scope, resources, approach, risks, and criteria** for testing the women’s clothing e-commerce website.

**Goal:**
Ensure that the system meets business requirements, works correctly for end users, and is ready for production release.

## 2. Scope

### 2.1 In Scope (What we test)

* User registration & authorization
* Product catalog & categories
* Menu & navigation
* Search, filters, sorting
* Product details page
* Wishlist (Favorites)
* Shopping cart
* Checkout flow
* Payment integration
* Order confirmation
* User profile
* Responsive behavior (desktop / mobile)
* Basic API (smoke level) 
**API endpoints are usually open for testing in test environments, but restricted in production for security reasons.**

### 2.2 Out of Scope (What we don’t test)

* Admin panel
* Load / stress testing
* Security penetration testing
* Third-party payment provider internal logic

## 3. Test Levels & Types

### Test Levels

* Smoke testing
* System testing
* Regression testing
* Acceptance testing

### Test Types

* Functional testing
* UI testing
* API testing (basic)
* Exploratory testing
* Regression testing
* Cross-browser testing

## 4. Test Approach

### 4.1 General Approach

Testing is based on:
* User Stories & Acceptance Criteria
* Risk-based testing
* Combination of manual and automated testing

### 4.2 Manual Testing

Used for:
* New features
* UI / UX validation
* Exploratory testing
* Edge cases
* Visual checks

### 4.3 Automated Testing

Used for:
* Smoke regression
* Critical business flows
* Stable functionality

## 5. Automation Strategy (Smoke Regression)

### Tools

* Cypress / WebdriverIO
* JavaScript

### Automated Smoke Regression Scope

Smoke Regression Automation Suite covers critical business flows:

* SR-01 Successful Login
* SR-02 Product Catalog Access
* SR-03 Product Details Page
* SR-04 Add to Cart
* SR-05 Update Cart
* SR-06 Complete Checkout
* SR-07 Order Confirmation

Detailed test cases are described in:
SMOKE_REGRESSION_AUTOMATION_SUITE.md


## 6. Test Data Strategy

* Test users
* Test credit cards
* Sandbox payment
* Test promo codes
* Mocked APIs


## 7. Test Artifacts

* Test Plan (this document)
* Test Scenarios
* Test Conditions
* Test Cases
* Checklists
* Bug reports
* Test summary report
* Traceability matrix

## 8. Entry Criteria

Testing can start when:

* Requirements & acceptance criteria are approved
* Test environment is ready
* Test data is prepared
* Required tools are available
* Build is delivered
* No critical blockers exist

## 9. Exit Criteria

Testing is completed when:

* All planned test cases are executed
* Test coverage ≥ 95%
* Requirements coverage ≥ 95%
* Regression suite pass rate ≥ 95%
* Traceability matrix completed
* No open Critical / High severity defects
* High priority defects are approved or fixed
* Smoke regression passed
* Test summary report is approved

## 10. Test Coverage & Traceability

### Coverage
Measures how much of the requirements are covered by tests.

```
Test Coverage = (Covered requirements / Total requirements) × 100%
```

### Traceability
Ensures each requirement has linked test cases.

Traceability Matrix includes:

* Requirement ID
* User Story
* Acceptance Criteria
* Test Scenario
* Test Cases

## 11. Risks & Mitigation

| Risk                         | Impact | Mitigation             |
| ---------------------------- | ------ | ---------------------- |
| Payment integration unstable | High   | API + smoke automation |
| UI changes frequently        | Medium | Manual testing         |
| Short release timeline       | High   | Risk-based testing     |
| Incomplete requirements      | Medium | Early QA review        |

## 12. Environment

* Browser: Chrome, Firefox, Safari
* OS: Windows, macOS
* Mobile: iOS, Android

## 13. Roles & Responsibilities

| Role      | Responsibility      |
| --------- | ------------------- |
| QA Lead   | Strategy, reporting |
| Middle QA | Automation + API    |
| Junior QA | Manual testing      |

## 14. Metrics & Reporting

* Test coverage
* Defect density
* Regression pass rate
* Defect severity distribution
* Test execution progress

## 15. Test Milestones / Timeline
* Sprint duration
* Regression window
* UAT window
