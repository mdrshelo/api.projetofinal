export class Comentario {

    private id: number;
    private texto: string;
    private autor: string;

    constructor(id: number, texto: string, autor: string) {

        this.id = id;
        this.texto = texto;
        this.autor = autor;

    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        if (id > 0) {
            this.id = id;
        }
    }

    public getTexto(): string {
        return this.texto;
    }

    public setTexto(texto: string): void {
        if (texto.trim() !== "") {
            this.texto = texto;
        }
    }

    public getAutor(): string {
        return this.autor;
    }

    public setAutor(autor: string): void {
        if (autor.trim() !== "") {
            this.autor = autor;
        }
    }

}