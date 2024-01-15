/// <reference types="cypress" />
import{Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'

// SECCIÓN THEN

    // Assertions asociada al Status Code
    Then('Obtengo un Status code {string}',(code)=>{
        cy.get('@response').its('status').should('eq',parseInt(code))
    })
