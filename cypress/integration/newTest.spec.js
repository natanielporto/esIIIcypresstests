context('General testing', () => {
  beforeEach(() => {
    cy.visit('https://github.com')
  })

  //NAVBAR TESTING
  //Click testing
  it('searches for a dropdown option on the "Why Github?" dropdown', () => {
    cy.get('.HeaderMenu').contains('Why GitHub?').click()

    cy.get('.dropdown-menu').contains('Features').click()
  })
  
  it('searches for a dropdown option on the "Explore" dropdown', () => {
    cy.get('.HeaderMenu').contains('Explore').click()

    cy.get('.dropdown-menu').contains('Collections').click()
  })
  
  //Dev search
  it('types into the navbar Search field and clears the field', () => {
    cy.get('.header-search-input').type('Nataniel Porto', { delay: 60 }).should('have.value', 'Nataniel Porto')
    
    cy.get('.header-search-input').clear().should('have.value', '')
   
  })

  it('types into the navbar Search field goes to that page', () => {
    cy.get('.header-search-input').type('angelogluz{enter}')

    cy.get('.menu-item').last().click()

    cy.get('.mr-1').click()

    cy.url().should('eq', 'https://github.com/angelogluz')

  })

  //PAGE BODY TESTING
  //Button
  it('tests for the value of a button', () => {
    cy.get('.btn-mktg').should('contain', 'Start a free trial')
  })
  
  it('scrolls button into vision and clicks it', () => {
   
    cy.get('.btn-mktg.btn-large-mktg.btn-outline-mktg.mx-auto.Bump-link').first().
    scrollIntoView();
    
    cy.get('.btn-mktg.btn-large-mktg.btn-outline-mktg.mx-auto.Bump-link').first().
    scrollIntoView().click();
    
    cy.url().should('eq', 'https://github.com/enterprise');

  })

  it('tests if the footer back to the top works properly', () => {
    cy.get('.footer').scrollIntoView();
    
    cy.get('.octicon.octicon-logo-github').click();
    
    cy.get('.h000-mktg.text-white.lh-condensed-ultra.mb-3').should('contain.text', 'Built for developers'); 

  })
  
  it('tests if a footer specific link works properly', () => {
    cy.get('.footer').scrollIntoView();
    
    cy.get('.col-6.col-sm-3.col-lg-2.mb-6.mb-md-2.pr-3.pr-md-0.pl-md-4').eq('2').get('.lh-condensed.mb-3').eq('21').should('contain.text', 'Careers')
     
    cy.get('.col-6.col-sm-3.col-lg-2.mb-6.mb-md-2.pr-3.pr-md-0.pl-md-4').eq('2').get('.lh-condensed.mb-3').eq('21').should('contain.text', 'Careers').click()

  })

  it('tries to sign in without password', () => {
    cy.get('.HeaderMenu-link.no-underline.mr-3').click()

    cy.get('#login_field.form-control.input-block').type('natanielp@gmil.com{enter}')
    
    cy.url().should('eq', 'https://github.com/session');
         
    cy.get('#js-flash-container').should('contain.text', 'Incorrect username or password.')
  })

})