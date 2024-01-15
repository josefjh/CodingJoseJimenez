/// <reference types="cypress" />
import{Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'

// Declaración de variables iniciales para api-interop
var variable = 0  

// SECCIÓN GIVEN

    // Corresponde a carga de datos para búsqueda de pokémons
Given('Quiero consultar la información para un pokémon',()=>{
    cy.fixture(`data-pokeapi/data_consultas.json`).then(data =>{this.info = data})
})

Given('La búsqueda la realizo con un pokémon ya de consulta típica',()=>{
        arr = [0,1,2,3,4,5,6,7,8,9];
        randomIndex = Math.floor(Math.random() * arr.length);
        seleccion = arr[randomIndex];
        variable = eleccion
})


// SECCIÓN WHEN

    // Corresponde a la consulta a la API
When('Ejecuto la pegada al endpoint',()=>{
    cy.pokeConsulta(data[variable]).as('response')
   // cy.get('@response').then(res=>{cy.writeFile('cypress/fixtures/test-data/interoperabilidad/interbank.json',res.body)})
})


// SECCIÓN THEN

    // Corresponde a la consulta a la API
        // Utilizado para verificar: ID, nombre, experiencia_base
    Then('Confirmo que el {string} es {string}',(field,word)=>{
       cy.get('@response').then( data=>{
            expect(data.body).to.include.keys(
                'abilities',
                'base_experience',
                'forms',
                'game_indices',
                'height',
                'held_items',
                'id',
                'is_default',
                'location_area_encounters',
                'moves',
                'name',
                'order',
                'past_abilities',
                'past_types',
                'species',
                'sprites',
                'stats',
                'types',
                'weight'
            )
        })
        cy.get('@response').its('body.'+field).should('eq',word)
    })

        // Utilizado para verificar el tipo y la habilidad
    Then('Confirmo que su {string} es {string}',(a,b)=>{
        if (a=='tipo'){
            sub_body=types
            field='type'
        }
        else if (b=='habilidad'){
            sub_body=abilities
            field='ability'
        }
        cy.get('@response').then( data=>{
            expect(data.body.sub_body).to.include.keys(
                '0'
        )
    })
    cy.get('@response').its('body.'+sub_body+'.0'+field+'.name').should('eq',word)
    })

