# Gestione di un Sistema Bibliotecario

# Obiettivo

Mettere in pratica la conoscenza delle classi in JavaScript attraverso lo sviluppo di un semplice sistema di gestione per una biblioteca. Gli studenti impareranno a definire classi, proprietà, metodi, e a gestire le relazioni tra oggetti.

# Descrizione del Progetto

Creare un sistema per una biblioteca che permetta di gestire i libri disponibili e i prestiti agli utenti. Il sistema dovrà essere in grado di aggiungere nuovi libri, registrare utenti, effettuare prestiti e ricevere i libri restituiti.

# Parte 1: Definizione delle Classi

1.  **Classe** `Libro`
    1.  **Proprietà:**
        1.  `id_libro: identificatore univoco del libro`
        2.  `titolo`: il titolo del libro.
        3.  `autore`: l'autore del libro.
        4.  `isbn`: il codice ISBN univoco del libro.
        5.  `disponibile`: un booleano che indica se il libro è disponibile per il prestito.
    2.  **Metodi:**
        1.  Costruttore che inizializza le proprietà del libro.
        2.  Metodo per cambiare lo stato di disponibilità del libro.
2.  **Classe** `Utente`
    1.  **Proprietà:**
        1.  `nome`: il nome dell'utente.
        2.  `cognome`: il cognome dell’utente.
        3.  `email`: indirizzo email dell’utente.
        4.  `id_utente`: un identificativo univoco per l'utente.
        5.  `libriInPrestito`: un array che contiene gli ISBN dei libri attualmente in prestito all'utente.
    2.  **Metodi:**
        1.  Costruttore che inizializza le proprietà dell'utente.
        2.  Metodo per prendere in prestito un libro (aggiunge il libro all'array `libriInPrestito`).
        3.  Metodo per restituire un libro (rimuove il libro dall'array `libriInPrestito`).
3.  **Classe** `Biblioteca`
    1.  **Proprietà:**
        1.  `libri`: un array di oggetti `Libro`.
        2.  `utenti`: un array di oggetti `Utente`.
    2.  **Metodi:**
        1.  Costruttore che inizializza le proprietà della biblioteca.
        2.  Metodo per aggiungere un libro al sistema.
        3.  Metodo per registrare un utente nel sistema.
        4.  Metodo per effettuare un prestito a un utente.
        5.  Metodo per ricevere un libro restituito e aggiornare lo stato di disponibilità del libro.

# Parte 2: Implementazione

1.  Implementare le classi descritte sopra.
2.  Realizzare un programme che permetta di svolgere le seguenti operazioni:
    1.  Creare oggetti `Libro` e aggiungerli al sistema della biblioteca.
    2.  Registrare utenti nel sistema della biblioteca.
    3.  Effettuare prestiti e restituzioni.

# Requisiti Aggiuntivi:

-   Implementare un controllo per non permettere a un utente di prendere in prestito più di 3 libri contemporaneamente.
-   Aggiungere un metodo alla classe `Biblioteca` che stampi tutti i libri attualmente disponibili.
-   Aggiungere un metodo alla classe `Biblioteca` che stampi la lista degli utenti con i rispettivi libri in prestito.
-   Salvare i dati su file al termine del programma e caricare i dati da file all’avvio del programma.

# Consegna

Consegnare il codice sorgente del progetto insieme a un breve report che descriva come sono state implementate le varie parti dell'esercitazione, le eventuali difficoltà incontrate e come sono state risolte.
