describe('logOut', () => {
    before(() => {
        cy.fillLocalStorageWithLoggedInUserData();
        cy.visit(Cypress.env('host'));
    });

    it('click log out', () => {
        cy.checkLocalStorageIfLoggedIn();
        cy.get(sel.logOutButton)
            .should('exist')
            .click();
        cy.checkLocalStorageIfNotLoggedIn();
        cy.loginFormVisible(sel);
    });

    it('is storage clear after reload', () => {
        cy.reload();
        cy.checkLocalStorageIfNotLoggedIn();
        cy.loginFormVisible(sel);
    });
});

const sel = {
    logOutButton: '[class^="MuiToolbar-root-"] > button:nth-child(3)',
    form: '[class^="ReduxForm-layout-"]',
    emailInput: 'input[type=email]',
    passwordInput: 'input[type=password]',
    submitButton: '[class^="MuiButton-label-"]'
};
