describe('Powinno wykryć 3 książki na start', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')
    cy.get('article.list-horizontal').should('have.length', 3);
    cy.get('article')
    .should('contain', 'Sherlock Holmes')
    .should('contain', 'Hobbit')
    .should('contain', 'Książka kulinarna')

  })
})

describe('Po wpisaniu do wyszukiwania "Hobbit powinna być dokładnie jedna książka"', () =>{
  it ('passes', () =>{
    cy.visit('http://localhost:5173/')
    cy.get('input[placeholder="Search in list"]').type("Hobbit");
    cy.get('article.list-horizontal').should('have.length', 1);
    cy.get('article')
    .should('not.contain', 'Sherlock Holmes')
    .should('contain', 'Hobbit')
  })
  }
)

describe('Po wybraniu typu książki adventure wyświetla się tylko książka Hobbit', () =>{
  it ('passes', () => {
    cy.visit('http://localhost:5173/')
    cy.get('select').select("Adventure")
    cy.get('article.list-horizontal').should('have.length', 1);
    cy.get('article')
    .should('not.contain', 'Sherlock Holmes')
    .should('contain', 'Hobbit')
  })
}


)