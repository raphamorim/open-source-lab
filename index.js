
/*
 * Algoritmo
 * [x] Lista de todos os participantes
 * [x] Lista de projetos abertos
 * [x] Relacionar os Lista
 * [x] Printar todos os projeto - participante
 */

var participant = [
    {
        name: 'Ronalson'
    },
    {
        name: 'Diego'
    },
    {
        name: 'Cayo'
    },
    {
        name: 'Hugo'
    },
    {
        name: 'Guilherme'
    }
];

var opensource = [
    {
        name: 'primeiro'
    },
    {
        name: 'segundo'
    },
    {
        name: 'terceiro'
    },
    {
        name: 'quarto'
    },
    {
        name: 'quinto'
    }
];

opensource.forEach(function( el, idx, arr ){

    el[ 'author' ] = participant[ idx ].name;

    console.log( "Project: " + el['name'], "Author: " + el['author'] );

});
