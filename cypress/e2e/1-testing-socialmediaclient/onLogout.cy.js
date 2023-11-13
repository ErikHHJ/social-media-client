describe('https://erikhhj.github.io/social-media-client/', () => {
  it('checks logout', () => {
    cy.visit('https://erikhhj.github.io/social-media-client/');
    cy.wait(2000);
    cy.get('#registerForm > div.modal-footer > button.btn.btn-outline-success')
      .click()
      .wait(1000);
    cy.get('#loginEmail').type('erikhhju@stud.noroff.no');
    cy.get('#loginPassword').type('Myrkdalen1!');
    cy.get('.btn-success').contains('Login').click();
    cy.wait(5000);

    cy.get('[data-auth="logout"]').contains('Logout').click().wait(1000);
    cy.get('h5#registerModalLabel').contains('Create');
  });
});
