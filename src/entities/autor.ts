export class Autor {

    private id: number;
    private nome: string;
    private email: string;

    constructor(id: number, nome: string, email: string) {

        this.id = id;
        this.nome = nome;
        this.email = email;

    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        if (id > 0) {
            this.id = id;
        }
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        if (nome.trim() !== "") {
            this.nome = nome;
        }
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        if (email.includes("@")) {
            this.email = email;
        }
    }

}