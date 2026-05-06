# WEEK-2 — Advanced JavaScript Arrays, Modules & OOP

This week covers higher-order array methods, ES6 modules, object-oriented programming, spread/rest operators, shallow vs deep copy, and timer functions.

## 📁 Structure

```
WEEK-2/
├── 25-02-2026/                        # Day 1 – Array Methods & Modular Systems
│   ├── SIMPLE/                        # Basic array method exercises
│   │   ├── Assignment_1.js            # Temperature analysis (filter, map, reduce, find)
│   │   ├── Assignment_2.js            # Course name processor
│   │   └── Assignment_3.js            # Student marks list
│   ├── ADVANCED/                      # Complex real-world scenarios
│   │   ├── Assignment_1.js            # Shopping cart summary
│   │   ├── Assignment_2.js            # Student performance dashboard
│   │   ├── Assignment_3.js            # Employee payroll processor
│   │   ├── Assignment_4.js            # Movie streaming platform
│   │   └── Assignment_5.js            # Bank transaction analyzer
│   ├── ShoppingCartSystem/            # Multi-module e-commerce system
│   │   ├── app.js                     # Entry point
│   │   ├── product.js                 # Product catalog module
│   │   ├── cart.js                    # Cart management module
│   │   ├── discount.js                # Coupon & discount module
│   │   └── payment.js                 # Payment processing module
│   └── TaskManagementSystem/          # Task CRUD with validation
│       ├── app.js                     # Entry point
│       ├── task.js                    # Task operations module
│       └── validator.js               # Input validation module
└── 26-02-2026/                        # Day 2 – OOP, Spread, Copy, Timers
    ├── LibraryManagementSystem.js     # ES6 Class-based library system
    ├── Arrays{SpreadOperator}/        # Spread & Rest operator exercises
    │   ├── Exercise1.js               # Array copy & extend
    │   ├── Exercise2.js               # Object clone & extend
    │   └── Exercise3.js               # REST parameter sum function
    ├── Shallow&Deepcopy/              # Copy behavior exercises
    │   ├── Exercise1.js               # Shallow copy with spread
    │   └── Exercise2.js               # Deep copy with structuredClone
    └── TimerFunctions/                # Asynchronous timer exercises
        ├── ExamPortalSimulator.js     # setTimeout-based exam flow
        └── OTPSimulator.js            # setInterval-based OTP countdown
```

## 🧠 Concepts Covered

| Concept | Files |
|---|---|
| filter(), map(), reduce(), find(), findIndex() | All SIMPLE & ADVANCED assignments |
| ES6 Modules (import/export) | ShoppingCartSystem, TaskManagementSystem |
| ES6 Classes & OOP | `LibraryManagementSystem.js` |
| Spread & Rest Operators | `Arrays{SpreadOperator}/` exercises |
| Shallow vs Deep Copy | `Shallow&Deepcopy/` exercises |
| setTimeout / setInterval | `TimerFunctions/` exercises |

## ▶️ How to Run

```bash
# Simple / Advanced assignments
node WEEK-2/25-02-2026/SIMPLE/Assignment_1.js

# Modular systems (requires --experimental-modules or .mjs)
node WEEK-2/25-02-2026/ShoppingCartSystem/app.js

# OOP & Timer exercises
node WEEK-2/26-02-2026/LibraryManagementSystem.js
node WEEK-2/26-02-2026/TimerFunctions/OTPSimulator.js
```
