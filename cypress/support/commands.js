// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('fillLocalStorageWithLoggedInUserData', () => {
    const expirationDate = new Date(new Date().getTime() + 24 * 3600 * 1000);
    window.localStorage.setItem('email', 'test@test.com');
    window.localStorage.setItem('userId', '1');
    window.localStorage.setItem('expirationDate', expirationDate.toString());
});

Cypress.Commands.add('checkLocalStorageIfLoggedIn', () => {
    expect(localStorage.getItem('email')).to.exist;
    expect(localStorage.getItem('userId')).to.exist;
    expect(localStorage.getItem('expirationDate')).to.exist;
});

Cypress.Commands.add('checkLocalStorageIfNotLoggedIn', () => {
    expect(localStorage.getItem('email')).to.be.null;
    expect(localStorage.getItem('userId')).to.be.null;
    expect(localStorage.getItem('expirationDate')).to.be.null;
});

Cypress.Commands.add('loginFormVisible', sel => {
    cy.get(sel.form)
        .should('exist')
        .should('be.visible');
    cy.get(sel.emailInput)
        .should('exist')
        .should('be.visible');
    cy.get(sel.passwordInput)
        .should('exist')
        .should('be.visible');
    cy.get(sel.submitButton)
        .should('exist')
        .should('be.visible');
});

Cypress.Commands.add('profileDialogContentExists', sel => {
    cy.get(sel.dialogTitle)
        .should('be.visible')
        .should('contain', 'Your data');
    cy.get(sel.dialogNameInput).should('have.value', 'FirstName1 LastName1');
    cy.get(sel.dialogEmailInput).should('have.value', 'test@test.com');
    cy.get(sel.dialogPasswordInput).should('have.value', 'test');
});

Cypress.Commands.add('profileDialogContentDoesNotExist', sel => {
    cy.get(sel.dialogTitle).should('not.be.visible');
    cy.get(sel.dialogNameInput).should('not.be.visible');
    cy.get(sel.dialogEmailInput).should('not.be.visible');
    cy.get(sel.dialogPasswordInput).should('not.be.visible');
});
