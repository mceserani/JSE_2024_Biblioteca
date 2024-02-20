class Libro {

    constructor(id_libro, titolo, autore, isbn, disponibile){
        this.id_libro = id_libro;
        this.titolo = titolo;
        this.autore = autore;
        this.isbn = isbn;
        this.disponibile = disponibile;
    }
    
    setDisponibile(disponibile){
        this.disponibile = disponibile;
    }

}

export default Libro;