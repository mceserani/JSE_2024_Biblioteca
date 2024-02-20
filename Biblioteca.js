import fs from "fs";
class Biblioteca {

    constructor(){
        this.libri = [];
        this.utenti = [];
    }

    inserisciLibro(libro){
        this.libri.push(libro);
    }

    registraUtente(utente){
        this.utenti.push(utente);
    }

    prestitoLibro(id_libro, id_utente){
        let libro = this.libri.find(l => l.id_libro === id_libro);
        let utente = this.utenti.find(u => u.id_utente === id_utente);
        if(libro && utente && libro.disponibile){
            libro.setDisponibile(false);
            utente.prendeInPrestito(libro);
        }
    }

    restituzioneLibro(id_libro, id_utente){
        let libro = this.libri.find(l => l.id_libro === id_libro);
        let utente = this.utenti.find(u => u.id_utente === id_utente);
        if(libro && utente){
            libro.setDisponibile(true);
            utente.restituisceLibro(libro);
        }
    }

    stampaLibri(){
        let out = "Libri:\n";
        this.libri.forEach(l => out += l.id_libro + " - " + l.autore + " - " + l.titolo + " - " + l.isbn + " - " + (l.disponibile ? "Disponibile" : "In prestito") + "\n");
        out += "\n";
        return out;
    }

    stampaUtenti(){
        let out = "Utenti:\n";
        for (let u of this.utenti){
            out += "- " + u.id_utente + "\n" + u.nome + " " + u.cognome + "\n" + u.email + "\n";
            out += "Libri in prestito:\n";
            u.libri_in_prestito.forEach(l => out += l.id_libro + " - " + l.autore + " - " + l.titolo + " - " + l.isbn + "\n");
            out += "\n";
        }
        return out;
    }

    checkPrestitoUtente(id_utente){
        let utente = this.utenti.find(u => u.id_utente === id_utente);
        if(utente){
            return utente.quantiInPrestito() > 2;
        }
    }

    salvaSuFile(){
        let data = JSON.stringify(this);
        fs.writeFile('biblioteca.json', data, (err) => {
            if (err) throw err;
        });
    }

    caricaDaFile(){
        fs.readFile('biblioteca.json', 'utf8', (err, data) => {
            if (err) throw err;
            let biblioteca = JSON.parse(data);
            this.libri = biblioteca.libri;
            this.utenti = biblioteca.utenti;
        });
    }

}

export default Biblioteca;