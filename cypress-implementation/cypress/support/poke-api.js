///	<reference types="cypress" />

// Consulta de Pokemon 
Cypress.Commands.add("pokeConsulta",(dato)=>{
    cy.api({
        method: 'GET',
        url: 'https://pokeapi.co/api/v2/pokemon/'+dato,
        failOnStatusCode: false
    })
    .then(res=>{res})
})
