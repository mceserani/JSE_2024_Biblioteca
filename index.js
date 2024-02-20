import Libro from "./Libro.js";
import Utente from "./Utente.js";
import Biblioteca from "./Biblioteca.js";

import inquirer from "inquirer";

const menù = [
    {
        type: "list",
        name: "scelta",
        message: "Cosa vuoi fare?",
        choices: ["Inserisci libro", "Registra utente", "Prestito libro", "Restituzione libro","Stampa elenco libri", "Stampa utenti", "Esci"]
    }
];

const inserisciLibro = [
    {
        type: "input",
        name: "id_libro",
        message: "Id del libro (numero intero): ",
        validate: function(value){
            let valid = Boolean(value.match(/^\d+$/));
            return valid || "Inserisci un numero intero";
        },
    },
    {
        type: "input",
        name: "titolo",
        message: "Titolo del libro",
        validate: function(value){
            return value !== "" || "Inserisci un titolo";
        }
    },
    {
        type: "input",
        name: "autore",
        message: "Autore del libro",
        validate: function(value){
            return value !== "" || "Inserisci un autore";
        }
    },
    {
        type: "input",
        name: "isbn",
        message: "ISBN del libro",
        validate: function(value){
            let valid = Boolean(value.match(/^(?:978|979)\d{10}$/));
            return valid || "Inserisci un ISBN";
        }
    }
];

const registraUtente = [
    {
        type: "input",
        name: "id_utente",
        message: "Id dell'utente (numero intero): ",
        validate: function(value){
            let valid = value.match(/^\d+$/);
            return valid || "Inserisci un numero intero";
        },
    },
    {
        type: "input",
        name: "nome",
        message: "Nome dell'utente",
        validate: function(value){
            return value !== "" || "Inserisci un nome";
        }
    },
    {
        type: "input",
        name: "cognome",
        message: "Cognome dell'utente",
        validate: function(value){
            return value !== "" || "Inserisci un cognome";
        }
    },
    {
        type: "input",
        name: "email",
        message: "Email dell'utente",
        validate: function(value){
            let valid = Boolean(value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/));
            return valid || "Inserisci un'email";
        }
    }
];

const prestitoLibro = [
    {
        type: "input",
        name: "id_libro",
        message: "Id del libro (numero intero): ",
        validate: function(value){
            let valid = Boolean(value.match(/^\d+$/));
            return valid || "Inserisci un numero intero";
        },
    },
    {
        type: "input",
        name: "id_utente",
        message: "Id dell'utente (numero intero): ",
        validate: function(value){
            let valid = Boolean(value.match(/^\d+$/));
            return valid || "Inserisci un numero intero";
        },
    }
];

const restituzioneLibro = prestitoLibro

const biblioteca = new Biblioteca();

function main(){
    inquirer.prompt(menù).then(risposta => {
        switch(risposta.scelta){
            case "Inserisci libro":
                inquirer.prompt(inserisciLibro).then(risposta => {
                    let libro = new Libro(parseInt(risposta.id_libro), risposta.titolo, risposta.autore, risposta.isbn, true);
                    biblioteca.inserisciLibro(libro);
                    main();
                });
                break;
            case "Registra utente":
                inquirer.prompt(registraUtente).then(risposta => {
                    let utente = new Utente(parseInt(risposta.id_utente), risposta.nome, risposta.cognome, risposta.email);
                    biblioteca.registraUtente(utente);
                    main();
                });
                break;
            case "Prestito libro":
                if (!biblioteca.checkPrestitoUtente(parseInt(risposta.id_utente))){
                    console.log("L'utente ha già 3 libri in prestito");
                    main();
                    break;
                }
                inquirer.prompt(prestitoLibro).then(risposta => {
                    biblioteca.prestitoLibro(parseInt(risposta.id_libro), parseInt(risposta.id_utente));
                    main();
                });
                break;
            case "Restituzione libro":
                inquirer.prompt(restituzioneLibro).then(risposta => {
                    biblioteca.restituzioneLibro(parseInt(risposta.id_libro), parseInt(risposta.id_utente));
                    main();
                });
                break;
            case "Stampa elenco libri":
                console.log(biblioteca.stampaLibri());
                main();
                break;
            case "Stampa utenti":
                console.log(biblioteca.stampaUtenti());
                main();
                break;
            case "Esci":
                console.log("Arrivederci!");
                break;
        }
    });
}

main();