describe('posts', () => {
    before(() => {
        cy.fillLocalStorageWithLoggedInUserData();
        cy.visit(Cypress.env('host'));
    });

    it('posts length', () => {
        cy.wait(3000);
        cy.get(sel.postsContainer)
            .should('be.visible')
            .children()
            .should('be.visible');
        cy.get(sel.postsContainer)
            .children()
            .should('have.length', 100);
    });

    after(() => {
        cy.clearLocalStorage();
    });
});

const sel = {
    postsContainer: '[class^="Dashboard_posts"]'
};
