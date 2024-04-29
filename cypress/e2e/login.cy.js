describe('login', () => {
  // beforeEach(() => {
   
  // })
  it('passes', () => {
    cy.visit('http://localhost:5173/')
    cy.contains("LOGGA IN PÅ X")
  })

  it('test login', () => {
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
      
      cy.contains("AAA").click()
      cy.wait(500)
      cy.contains("LOGGA UT")
      cy.wait(500)
      cy.get('#logga-ut').click()
      cy.wait(100)

  })



})


// describe('logout', () => {
//   beforeEach(() => {
//     cy.visit('http://localhost:5173/')
//   })
//   it('passes', () => {
   
//     cy.contains("Trendande hashtags")
//   })

//   it('test logout', () => {
//     cy.contains("#tre-prickar").click()
//     cy.wait(100)
//     cy.contains("LOGGA UT")
//     cy.wait(100)
//     cy.get('#logga-ut').click()
//     cy.wait(100)
    


//   })

// })