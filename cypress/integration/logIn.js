describe('LogIn', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('host'));
    });

    it('wrong credentials', () => {
        cy.url().should('contain', '/login');
        cy.get(sel.emailInput)
            .type('test1@test1.com')
            .should('be.visible')
            .should('have.value', 'test1@test1.com');
        cy.get(sel.passwordInput)
            .type('test1')
            .should('be.visible')
            .should('have.value', 'test1');
        cy.get(sel.submitButton)
            .should('be.visible')
            .should('contain', 'Zaloguj się')
            .click();
        cy.get(sel.form)
            .should('exist')
            .should('be.visible');
        cy.get(sel.errorSnackbarContainer)
            .should('exist')
            .should('be.visible');
        cy.get(sel.errorSnackbarMessage)
            .should('exist')
            .should('be.visible')
            .should('contain', 'Błędne dane logowania');
    });

    it('right credentials', () => {
        cy.url().should('contain', '/login');
        cy.get(sel.emailInput)
            .type('test@test.com')
            .should('be.visible')
            .should('have.value', 'test@test.com');
        cy.get(sel.passwordInput)
            .type('test')
            .should('be.visible')
            .should('have.value', 'test');
        cy.get(sel.submitButton)
            .should('be.visible')
            .should('contain', 'Zaloguj się')
            .click();
        cy.get(sel.form).should('not.exist');
        cy.checkLocalStorageIfLoggedIn();
        cy.url().should('not.contain', '/login');
    });

    it('after refresh', () => {
        cy.fillLocalStorageWithLoggedInUserData();
        cy.reload();
        cy.url().should('not.contain', '/login');
        cy.get(sel.form).should('not.exist');
        cy.checkLocalStorageIfLoggedIn();
    });

    after(() => {
        cy.clearLocalStorage();
        cy.checkLocalStorageIfNotLoggedIn();
    });
});

const sel = {
    form: '[class^="ReduxForm-layout-"]',
    emailInput: 'input[type=email]',
    passwordInput: 'input[type=password]',
    submitButton: '[class^="MuiButton-label-"]',
    errorSnackbarContainer: '[class^="MuiSnackbarContent-message-"]',
    errorSnackbarMessage: '[class^="SnackBarContent-message-"]'
};
