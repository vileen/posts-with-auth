describe('profile', () => {
    beforeEach(() => {
        cy.fillLocalStorageWithLoggedInUserData();
        cy.visit(Cypress.env('host'));
    });

    it('has valid content', () => {
        cy.get(sel.profileButton)
            .should('be.visible')
            .click();
        cy.profileDialogContentExists(sel);
        cy.get(sel.closeDialogButton)
            .should('be.visible')
            .click();
        cy.profileDialogContentDoesNotExist(sel);
    });

    it('click at backdrop also closes dialog', () => {
        cy.get(sel.profileButton)
            .should('be.visible')
            .click();
        cy.profileDialogContentExists(sel);
        cy.get(sel.dialogBackdrop).click({ force: true });
        cy.profileDialogContentDoesNotExist(sel);
    });

    after(() => {
        cy.clearLocalStorage();
    });
});

const sel = {
    profileButton: '[class^="MuiToolbar-root-"] > button:nth-child(2)',
    closeDialogButton: '[class^="MuiDialogActions-root-"] > button[type="button"]',
    dialogTitle: '[class^="MuiDialogTitle-root-"] > [class^="MuiTypography-root-"]',
    dialogNameInput: '[class^="MuiDialogContent-root-"] > div:nth-child(1) input',
    dialogEmailInput: '[class^="MuiDialogContent-root-"] > div:nth-child(3) input',
    dialogPasswordInput: '[class^="MuiDialogContent-root-"] > div:nth-child(5) input',
    dialogBackdrop: '[class^="MuiBackdrop-root-"]'
};
