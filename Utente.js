class Utente {

    static fromJSON(json){
        return Object.assign(new Utente(), json);
    }

    constructor(id_utente, nome, cognome, email){
        this.id_utente = id_utente;
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.libri_in_prestito = [];
    }
    
    prendeInPrestito(libro){
        this.libri_in_prestito.push(libro);
    }
    
    restituisceLibro(libro){
        this.libri_in_prestito = this.libri_in_prestito.filter(l => l.id_libro !== libro.id_libro);
    }

    quantiInPrestito(){
        return this.libri_in_prestito.length;
    }

}

export default Utente;