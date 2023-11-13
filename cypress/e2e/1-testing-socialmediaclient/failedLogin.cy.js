describe('https://erikhhj.github.io/social-media-client/', () => {
  it('can log in and view profile.', () => {
    cy.visit('https://erikhhj.github.io/social-media-client/');
    cy.wait(2000);
    cy.get('#registerForm > div.modal-footer > button.btn.btn-outline-success')
      .click()
      .wait(1000);
    cy.get('#loginEmail').type('qwertyuiopasdfghjkkkkkkk@stud.noroff.no');
    cy.get('#loginPassword').type('Lol12345!!!!{enter}');
    cy.on('window:alert', (str) => {
      expect(str).to.contain('incorrect');
    });
  });
});
