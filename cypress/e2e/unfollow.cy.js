describe('unfollow', () => {
  // beforeEach(() => {
   
  // })
  it('passes', () => {
    cy.visit('http://localhost:5173/')
    cy.contains("LOGGA IN PÅ X")
  })

  it('test unfollow', () => {
    cy.visit('http://localhost:5173/')
    cy.contains("Sign in").click()
    cy.wait(500)
    cy.contains("Logga in på X")
    cy.wait(500)
    cy.get('#email').type('jonas')
    cy.wait(500)
    cy.contains("Next").click()
    cy.wait(500)
     cy.get('#password').type('jonas')
     cy.wait(500)
    //  cy.contains("#login-btn").click()
      cy.contains('Logga in!').click()
     
                  
      cy.wait(3000)
      
      cy.contains("adam").click()
      cy.wait(2000)
      cy.contains("Unfollow").click()
      cy.wait(3000)
      cy.contains('Follow').click()
      cy.wait(1000)

  })

  


})
