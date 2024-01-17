Feature: Pokemon

    Scenario: Consulta Exitosa de Pokémon por su nombre
    Given Quiero consultar la información para un pokémon
    And La búsqueda la realizo por "nombre"
    When Ejecuto la consulta al endpoint
    Then Obtengo un Status code "200"
    And Confirmo que el "name" es "typhlosion"
    #And Confirmo que el "id" es "157"
    And Confirmo que su "tipo" es "fire"
    And Confirmo que su "habilidad" es "blaze"

    Scenario: Consulta Exitosa  de Pokémon por su número
    Given Quiero consultar la información para un pokémon
    And La búsqueda la realizo por "id"
    When Ejecuto la consulta al endpoint
    Then Obtengo un Status code "200"
    And Confirmo que el "name" es "arcanine"
    #And Confirmo que el "id" es "59"
    And Confirmo que su "tipo" es "fire"
    And Confirmo que su "habilidad" es "intimidate"

    Scenario: Consulta Fallida de Pokémon por nombre errado
    Given Quiero consultar la información para un pokémon
    And La búsqueda la realizo por "nombre-errado"
    When Ejecuto la consulta al endpoint
    Then Obtengo un Status code "404"

    Scenario: Consulta Fallida de Pokémon por número errado
    Given Quiero consultar la información para un pokémon
    And La búsqueda la realizo por "numero-errado"
    When Ejecuto la consulta al endpoint
    Then Obtengo un Status code "404"
