describe('register', () => {
  // beforeEach(() => {
   
  // })
  it('passes', () => {
    cy.visit('http://localhost:5173/')
    cy.contains("LOGGA IN PÅ X")
  })

  it('test unfollow', () => {
    cy.visit('http://localhost:5173/')
    cy.contains("Register new user").click()
    cy.wait(500)
    cy.get('#name').type('Jonas Rydqvist')
    cy.wait(500)
    cy.get('#email').type('jonas@jensen.se')
    cy.wait(500)
    cy.get('#password').type('jonas')
    cy.wait(500)
    cy.get('#verified-password').type('jonas')
    cy.wait(500)
    cy.get('#nickname').type('ryd')
    cy.wait(500)
    cy.get('#about').type('Är 35 år gammal, bor i stenungsund')
    cy.wait(500)
    cy.get('#occupation').type('Jobbar inom golf')
    cy.wait(500)
    cy.get('#hometown').type('Stenungsund')
    cy.wait(500)
    cy.get('#webpage').type('www.jensen.se')
    cy.wait(500)
    cy.contains("Save user").click()
                  
      cy.wait(3000)
     

  })

  


})
