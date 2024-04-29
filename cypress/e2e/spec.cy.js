describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })
  it('passes', () => {
   
    cy.contains("Notes")
  })

  it('test login', () => {
    cy.contains("log in").click() // button click
    cy.contains("Login")
  })

})





describe("template spec", () => {
  beforeEach(() => {
    cy.visit("https://svt.se");
  });

  it("should contain Nyheter", () => {
    cy.contains("Nyheter");
  });

  it("should show Tv-tablå", () => {
    cy.contains("Tv-tablå").click(); // button click
    cy.contains("På SVT just nu");
  });
});