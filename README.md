/cypress/
├── e2e/
│   ├── api/
│   │   ├── auth/               # Authentication tests
│   │   │   ├── login.cy.js     # POST /login
│   │   │   └── register.cy.js  # POST /register (optional)
│   │   └── users/              # User management tests
│   │       ├── create-user.cy.js  # POST /users
│   │       ├── get-users.cy.js    # GET /users, GET /users/:id
│   │       └── update-delete.cy.js # PUT/PATCH/DELETE /users/:id
│   └── fixtures/
│       └── test-users.json     # Test data (emails, passwords)
├── support/
│   ├── commands.js            # Custom commands (e.g., `cy.login()`)
│   └── constants.js           # Base URLs, error messages