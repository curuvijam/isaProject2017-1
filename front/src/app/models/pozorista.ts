export class Pozorista {
    constructor (
        public id: string,
        public naziv: string,
        public adresa: string,
        public opis: string,
        public repertoar: Array<String>,
        public brmesta: Array<String>

    ){}
}